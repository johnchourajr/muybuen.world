"use client"

import { AnimatedHeader } from "./animated-text"
import { Nav } from "./globals/nav"
import { Footer } from "./globals/footer"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import GtagScripts from "./globals/gtag"

export type LayoutProps = React.HTMLAttributes<HTMLDivElement>

export const Layout: React.FC<LayoutProps> = ({ children, ...extra }) => {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("config", "G-DRTQYLBHFZ", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <AnimatedHeader />
      <Nav />
      <main className="pb-20">{children}</main>
      <Footer />
      <GtagScripts />
    </>
  )
}
