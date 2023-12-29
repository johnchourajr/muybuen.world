import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./globals.css"
import clsx from "clsx"
import { Layout } from "@/components/layout"
import AuthContextProvider from "@/contexts/authContext"
import AppContextProvider from "@/contexts/appContext"
import Head from "next/head"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

// Font files can be colocated inside of `app`
const rulik = localFont({
  src: "../fonts/RulikVF.woff2",
  variable: "--font-rulik",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://muybuen.coffee"),
  title: "Muy Buen Coffee",
  description: "Find buen coffee, make buen coffee.",
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

{
  /* <script async src="https://www.googletagmanager.com/gtag/js?id=G-DRTQYLBHFZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-DRTQYLBHFZ');
</script> */
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppContextProvider>
      <AuthContextProvider>
        <html lang="en">
          <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-DRTQYLBHFZ"
            ></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-DRTQYLBHFZ', {
                page_path: window.location.pathname,
              });
            `,
              }}
            />
          </Head>
          <body
            className={clsx(inter.variable, rulik.variable, "min-h-screen")}
          >
            <Layout>{children}</Layout>
          </body>
        </html>
      </AuthContextProvider>
    </AppContextProvider>
  )
}
