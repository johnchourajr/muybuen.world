// app/api/search/googleautocomplete/route.ts

import { rateLimit } from "@/utils/ratelimit"

// const getIpAddress = (req: Request): string => {
//   const xForwardedFor = req.headers.get("x-forwarded-for")
//   const ipAddress = Array.isArray(xForwardedFor)
//     ? xForwardedFor[0]
//     : xForwardedFor
//   return ipAddress || "unknown"
// }

export async function GET(request: Request, response: Response) {
  // const ipAddress = getIpAddress(request)

  // if (rateLimit(ipAddress)) {
  //   return new Response(JSON.stringify({ error: "Rate limit exceeded" }), {
  //     status: 429,
  //     headers: { "Content-Type": "application/json" },
  //   })
  // }

  try {
    const { searchParams } = new URL(request.url)
    const input = searchParams.get("input")

    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
      input as string,
    )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    })

    if (
      res.ok &&
      res.headers.get("Content-Type")?.includes("application/json")
    ) {
      const data = await res.json()
      return new Response(JSON.stringify({ data }), {
        headers: { "Content-Type": "application/json" },
      })
    } else {
      const errorMessage = await res.text() // Get the raw response text
      throw new Error(`API call failed: ${errorMessage}`)
    }
  } catch (error) {
    if (error instanceof Error) {
      // Handle rate limit error or other errors
      return new Response(JSON.stringify({ error: error.message }), {
        status: 429,
        headers: { "Content-Type": "application/json" },
      })
    }
  }
}
