import heroImage from "../public/alt.png";
import Image from "next/image";
import { CodeIcon } from "./icons/icons";
export default function App() {
  return (
    <section className="cta-sec relative max-w-screen-xl dark:bg-gray-900 px-4 sm:px-8 container mx-auto">
      <div className="relative z-10 gap-5 items-center lg:flex">
        <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto block max-w-[100px]">
          <CodeIcon />
        </div>
        <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
          <h3 className="text-3xl dark:text-slate-400 text-gray-500 font-semibold md:text-4xl text-center">
            Programming{" "}
            <span className="text-black dark:text-gray-200 whitespace-nowrap">
              Web2 & Blockchain
            </span>
          </h3>
        </div>
      </div>
    </section>
  );
}
