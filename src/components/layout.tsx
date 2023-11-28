import Head from "next/head";
import { AnimatedHeader } from "./animated-text";
import { Nav } from "./globals/nav";
import { Footer } from "./globals/footer";

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Layout: React.FC<LayoutProps> = ({ children, ...extra }) => {
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
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};
