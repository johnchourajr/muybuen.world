"use client"
import SearchInput from "@/components/search-input"
import { useState } from "react"
import { Business, SearchResult } from "@/types/search.types"
import { SearchResults } from "@/components/search-results"

export const SearchContainer = () => {
  const [searchResults, setSearchResults] = useState<Business[] | null>(null)

  const handleSearch = async (location: string) => {
    try {
      const response = await fetch(`/api/search/yelp?location=${location}`)
      if (!response.ok) {
        throw new Error("Search failed")
      }
      const data: SearchResult = await response.json()
      setSearchResults(data.data.businesses) // Yelp API returns businesses in a 'businesses' array
      // console.log(data);
    } catch (error) {
      console.error("Failed to fetch:", error)
    }
  }

  return (
    <>
      <div className="grid-container">
        <div className="col-span-full pt-0 pb-6 relative z-20">
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <SearchResults searchResults={searchResults} />
    </>
  )
}
