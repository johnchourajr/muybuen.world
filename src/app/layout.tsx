import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import clsx from "clsx"
import { Layout } from "@/components/layout"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Font files can be colocated inside of `app`
const rulik = localFont({
  src: "../fonts/RulikVF.woff2",
  variable: "--font-rulik",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://muybuen.world"),
  title: "Muy Buen World",
  description: "A Muy Buen World",
  openGraph: {
    images: "/images/og.png",
  },
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/favicon.png",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, rulik.variable, "min-h-screen")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  )
}
