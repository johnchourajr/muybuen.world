// app/api/search/google.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")
  const radius = searchParams.get("radius")

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
    return Response.json(data)
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
