"use client"
import { ScrollXWrapper } from "@/components/scroll-x-wrapper"
import { motion } from "framer-motion"
import clsx from "clsx"
import { Business } from "@/types/search.types"
import { ResultTile } from "./search-result-tile"
import Image from "next/image"

export type SearchResultsProps = {
  searchResults: Business[] | null
}

export const SearchResults = ({ searchResults }: SearchResultsProps) => {
  // eliminate items from search results with a rating of 4 or less

  return (
    <>
      <ScrollXWrapper disableScroll={!searchResults}>
        {searchResults
          ? searchResults.map((result, index) => {
              console.log(result)

              return (
                <ResultTile
                  key={index}
                  uid={result.alias}
                  href={result.url}
                  className="!p-0"
                >
                  <div
                    className={clsx(
                      "z-[-1] w-full h-56 relative",
                      "bg-primary -opacity-10",
                      "md:py-7 py-5 md:px-9 px-6",
                    )}
                  >
                    <h2 className="text-white text-3xl">{result.name}</h2>
                    <div
                      className={clsx(
                        "absolute inset-0 z-[-1]",
                        "bg-primary mix-blend-hard-light",
                      )}
                    />
                    <Image
                      className={clsx(
                        "absolute inset-0 z-[-2]",
                        "mix-blend-lighten",
                      )}
                      src={result.image_url}
                      alt={result.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      objectFit="cover"
                    />
                  </div>
                  <div className="md:py-7 py-5 md:px-9 px-6 ">
                    <p>
                      {result.location.display_address.map((item, i) => (
                        <span key={i}>{item} </span>
                      ))}
                    </p>
                    <p>{result.rating} Stars</p>
                    <p>{result.review_count} Reviews</p>
                    {result.buentag && <p>{result.buentag}</p>}
                  </div>
                </ResultTile>
              )
            })
          : ["", "", ""].map((_, index) => <ResultTile href="" key={index} />)}
      </ScrollXWrapper>
    </>
  )
}
