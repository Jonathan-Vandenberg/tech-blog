import heroImage from "../public/alt.png";
import Image from "next/image";
import { CodeIcon } from "./icons/icons";
export default function App() {
  return (
    <section className="cta-sec relative max-w-screen-xl px-4 sm:px-8 container mx-auto">
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto block max-w-[120px]">
          <CodeIcon />
        </div>
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl bg-white text-gray-500 font-semibold md:text-4xl text-center">
            <span className="text-black">Full Spectrum </span> Programming
          </h3>
        </div>
      </div>
    </section>
  );
}
