import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { BackgroundSVG } from "../components/icons/icons";
import { useWindowSize } from "../utils/windowSize";
import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
  const size = useWindowSize();

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <section className="site-wrapper dark:bg-gray-900">
        <div className="absolute -z-10 w-full h-full dark:hidden hidden md:block">
          <BackgroundSVG height={size.height} width={size.width} />
        </div>
        <div className="fixed top-0 left-0 w-full z-50">
          <Nav />
        </div>
        <Component {...pageProps} />
        <Footer />
      </section>
    </ThemeProvider>
  );
}

export default MyApp;
