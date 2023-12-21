// app/api/search/yelp.ts

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const location = searchParams.get("location")
  const url = `https://api.yelp.com/v3/businesses/search?term=coffee&categories=coffee&range=5000&location=${location}`

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_YELP_API_KEY}`,
    },
  })
  const data = await res.json()

  return Response.json({ data })
}
