// app/api/database/add/route.ts
import { NextRequest, NextResponse } from "next/server"
import { Pool } from "pg"

const TABLE = process.env.NEXT_PUBLIC_RETOOL_DB_TABLE

const pool = new Pool({
  connectionString: process.env.NEXT_RETOOL_POSTGRESS_URL,
})

// id,audience,confirmation_sent_at,confirmed_at,created_at,email,role,updated_at,url,user_metadata

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method !== "POST") {
    // console.log(req);

    return new NextResponse(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }

  try {
    const body = await req.json()
    if (!body) {
      throw new Error("Request body is empty")
    }

    // Assuming 'body' is of a specific type, replace 'any' with your actual type
    const userData: any = body

    // SQL Query to check if user exists
    const checkUserQuery = `SELECT * FROM ${TABLE} WHERE id = $1`
    const { rows } = await pool.query(checkUserQuery, [userData.id])

    if (rows.length > 0) {
      // User exists, update their information
      const updateUserQuery = `
        UPDATE ${TABLE}
        SET audience = $1, confirmation_sent_at = $2, confirmed_at = $3, email = $4,
            role = $5, updated_at = NOW(), url = $6, user_metadata = $7
        WHERE id = $8`
      await pool.query(updateUserQuery, [
        userData.audience,
        userData.confirmation_sent_at,
        userData.confirmed_at,
        userData.email,
        userData.role,
        userData.url,
        JSON.stringify(userData.user_metadata),
        userData.id,
      ])
    } else {
      // User does not exist, insert new record
      const insertUserQuery = `
        INSERT INTO ${TABLE}
        (id, audience, confirmation_sent_at, confirmed_at, created_at, email,
         role, updated_at, url, user_metadata)
        VALUES
        ($1, $2, $3, $4, NOW(), $5, $6, NOW(), $7, $8)`
      await pool.query(insertUserQuery, [
        userData.id,
        userData.audience,
        userData.confirmation_sent_at,
        userData.confirmed_at,
        userData.email,
        userData.role,
        userData.url,
        JSON.stringify(userData.user_metadata),
      ])
    }

    return new NextResponse(JSON.stringify({ message: "Success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error processing user data:", error)
    return new NextResponse(
      JSON.stringify({ message: "Internal Server Error" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
  }
}
