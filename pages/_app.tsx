import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { BackgroundSVG } from "../components/icons/icons";
import { useWindowSize } from "../utils/windowSize";

function MyApp({ Component, pageProps: { ...pageProps } }: AppProps<{}>) {
  const size = useWindowSize();
  return (
    <section className="site-wrapper">
      <div className="fixed top-0 left-0 w-full z-50">
        <Nav />
      </div>
      <div className="absolute -z-10 w-full h-full sm-hidden">
        <BackgroundSVG height={size.height} width={size.width} />
      </div>
      <Component {...pageProps} />
      <Footer />
    </section>
  );
}

export default MyApp;
