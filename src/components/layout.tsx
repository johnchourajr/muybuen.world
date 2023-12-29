"use client"

import Head from "next/head"
import { AnimatedHeader } from "./animated-text"
import { Nav } from "./globals/nav"
import { Footer } from "./globals/footer"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

type Window = {
  gtag: (...args: any[]) => void
}

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
      <Head>
        <title>Muy Buen Coffee</title>
        <meta
          name="description"
          content="Find buen coffee, make buen coffee."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatedHeader />
      <Nav />
      <main className="pb-20">{children}</main>
      <Footer />
    </>
  )
}
