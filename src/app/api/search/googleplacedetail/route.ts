// app/api/search/google.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { place_id } = req.query

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json")
  url.searchParams.append("place_id", `${place_id}`)
  url.searchParams.append(
    "key",
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  )

  try {
    const response = await fetch(url.toString())
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message })
    }
  }
}
