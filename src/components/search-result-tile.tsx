"use client"
import { motion, useWillChange } from "framer-motion"
import clsx from "clsx"

export type ResultTileProps = {
  children?: React.ReactNode
  className?: string
}

export const ResultTile = ({
  children,
  className,
  ...extra
}: ResultTileProps) => {
  const willChange = useWillChange()

  const animatedProps = children && {
    whileHover: {
      scale: 1.01,
    },
    whileTap: {
      scale: 0.98,
    },
    transition: {
      duration: 0.5,
      ease: "circOut",
    },
    style: { willChange },
  }

  return (
    <motion.div
      className={clsx(
        "glass-card glass-card--light-blue",
        "min-h-[13rem] md:min-h-[18rem] w-[13rem] md:w-[18rem]",
        "relative flex flex-col h-full md:py-7 py-5 md:px-9 px-6 rounded-3xl",
        children && "bg-primaryLight",
        !children && "bg-white bg-opacity-10",
        className,
      )}
      {...animatedProps}
      {...extra}
    >
      {children}
    </motion.div>
  )
}
