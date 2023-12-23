"use client"
import { ScrollXWrapper } from "@/components/scroll-x-wrapper"
import { motion } from "framer-motion"
import clsx from "clsx"
import { Business } from "@/types/search.types"
import { ResultTile } from "./search-result-tile"

export type SearchResultsProps = {
  searchResults: Business[] | null
}

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  return (
    <>
      <ScrollXWrapper disableScroll={!searchResults}>
        {searchResults
          ? searchResults.map((result, index) => {
              console.log(result)

              return (
                <ResultTile key={index} href={result.url}>
                  <h2>{result.name}</h2>
                  <p>
                    {result.location.display_address.map((item, i) => (
                      <span key={i}>{item} </span>
                    ))}
                  </p>
                </ResultTile>
              )
            })
          : ["", "", ""].map((_, index) => <ResultTile href="" key={index} />)}
      </ScrollXWrapper>
    </>
  )
}
