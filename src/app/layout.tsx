import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import clsx from "clsx";
import { Layout } from "@/components/layout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Font files can be colocated inside of `app`
const rulik = localFont({
  src: "../fonts/RulikVF.woff2",
  variable: "--font-rulik",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muy Buen Coffee",
  description: "Find buen coffee, make buen coffee.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.variable, rulik.variable, "min-h-screen")}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
