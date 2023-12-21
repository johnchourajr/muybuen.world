// // app/api/search/googleautocomplete/rotue.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const input = searchParams.get("input")
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    input as string,
  )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  })
  if (res.ok && res.headers.get("Content-Type")?.includes("application/json")) {
    const data = await res.json()
    return new Response(JSON.stringify({ data }), {
      headers: { "Content-Type": "application/json" },
    })
  } else {
    const errorMessage = await res.text() // Get the raw response text
    throw new Error(`API call failed: ${errorMessage}`)
  }
}
