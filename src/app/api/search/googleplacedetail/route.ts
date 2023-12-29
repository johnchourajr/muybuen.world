// app/api/search/google.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const place_id = searchParams.get("place_id")

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
