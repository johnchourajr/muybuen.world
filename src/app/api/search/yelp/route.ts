// app/api/search/yelp.ts

import { buenlist, blacklist, shitlist } from "@/data/lists/lists"
import { Business } from "@/types/search.types"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get("location")
  const url = `https://api.yelp.com/v3/businesses/search?term=craft%20coffee&categories=coffee&range=2500&location=${location}`

  try {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`,
      },
    })
    // const data = await res.json()
    const { businesses } = await res.json()

    const processData = (data: Business[]) => {
      const buenResults = [] as Business[]
      const normalResults = [] as Business[]
      const shitResults = [] as Business[]

      data.forEach((shop: Business) => {
        if (buenlist.includes(shop.alias)) {
          buenResults.push({ ...shop, buentag: "buen" })
        } else if (shitlist.includes(shop.alias)) {
          shitResults.push({
            ...shop,
            buentag: "shitlist",
          })
        } else if (blacklist.includes(shop.alias)) {
          return null
        } else {
          normalResults.push(shop)
        }
      })

      return [...buenResults, ...normalResults, ...shitResults]
    }

    return new Response(JSON.stringify({ data: processData(businesses) }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    })
  } catch (error) {
    console.error("Error processing user data:", error)
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    })
  }
}
