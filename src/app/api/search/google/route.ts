// app/api/search/google.ts
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { lat, lng, radius } = req.query

  const url = new URL(
    "https://maps.googleapis.com/maps/api/place/findplacefromtext/json",
  )
  url.searchParams.append(
    "fields",
    "formatted_address,geometry,name,rating,place_id",
  )
  url.searchParams.append("location", `${lat},${lng}`)
  url.searchParams.append("radius", radius as string)
  url.searchParams.append("type", "cafe")
  url.searchParams.append("keyword", "coffee")
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
