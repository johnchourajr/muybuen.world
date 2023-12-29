"use client"
import clsx from "clsx"
import { useRef } from "react"
import { ScrollXBar } from "@/components/scroll-x-bar"

export type HScrollListProps = {
  children: React.ReactNode
  disableScroll?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export const ScrollXWrapper = ({
  children,
  disableScroll,
  ...extra
}: HScrollListProps) => {
  const ref = useRef<any>(null)
  return (
    <>
      <div
        ref={ref}
        className={clsx(
          "mask-overflow",
          "scrollbar-hide",
          "w-full flex items ",
          "py-6",
          "pl-4 md:pl-[var(--inset-x)]",
          "pr-4 md:pr-[var(--inset-x)]",
          !disableScroll && "overflow-x-scroll",
        )}
        {...extra}
      >
        <div className="inline-flex gap-2">{children}</div>
      </div>
      {!disableScroll && <ScrollXBar forwardRef={ref} />}
    </>
  )
}
