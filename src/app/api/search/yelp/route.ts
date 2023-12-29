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

      data.forEach((shop) => {
        // Check if shop.alias contains any word in buenlist
        const isInBuenlist = buenlist.some((keyword) =>
          shop.alias.includes(keyword),
        )
        const isInShitlist = shitlist.some((keyword) =>
          shop.alias.includes(keyword),
        )
        const isInBlacklist = blacklist.some((keyword) =>
          shop.alias.includes(keyword),
        )

        if (isInBlacklist) {
          // Skip adding to any list
          return null
        } else if (isInBuenlist) {
          buenResults.push({ ...shop, buentag: "buen" })
        } else if (isInShitlist) {
          shitResults.push({ ...shop, buentag: "shitlist" })
        } else {
          normalResults.push(shop)
        }
      })

      // order buenResults and normalResults by distance
      buenResults.sort((a, b) => a.distance - b.distance)
      normalResults.sort((a, b) => a.distance - b.distance)

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
