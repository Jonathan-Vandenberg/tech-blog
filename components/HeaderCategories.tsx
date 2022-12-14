import javascriptImage from "../public/categories/javascriptImage.png";
import GraphQLLogo from "../public/categories/GraphQLLogo.png";
import theGraphImage from "../public/categories/theGraphImage.svg";
import taiwindcssLogo from "../public/categories/tailwindLogo.png";
import travelImage from "../public/categories/solidityLogo.png";
import securityLogo from "../public/categories/securityLogo.png";
import hardhatImage from "../public/categories/hardhatLogo.png";
import nextJSLogo from "../public/categories/nextJSLogoSquare.png";

import Image from "next/image";
import { useEffect, useState } from "react";
import next from "next";

export default function App({
  categoryName,
  categoryDescription,
}: {
  categoryName: string;
  categoryDescription: string;
}) {
  const [style, setStyle] = useState("");

  useEffect(() => {
    headerColor();
  }, []);

  const headerColor = () => {
    switch (categoryName) {
      case "JAVASCRIPT":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "STYLING":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "GRAPHQL":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "SOLIDITY":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "SECURITY":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "SEO":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "HARDHAT":
        setStyle("p-5 mx-auto sm:p-10");
        break;
      case "NEXTJS":
        setStyle("p-5 mx-auto sm:p-10");
        break;
    }
  };

  return (
    <div className={style}>
      <div className="flex flex-col max-w-md mx-auto overflow-hidden rounded">
        <div className="block w-full mx-auto md:mt-4">
          <Image
            src={
              categoryName === "JAVASCRIPT"
                ? javascriptImage
                : categoryName === "STYLING"
                ? taiwindcssLogo
                : categoryName === "GRAPHQL"
                ? GraphQLLogo
                : categoryName === "SOLIDITY"
                ? travelImage
                : categoryName === "SECURITY"
                ? securityLogo
                : categoryName === "THEGRAPH"
                ? theGraphImage
                : categoryName === "HARDHAT"
                ? hardhatImage
                : categoryName === "NEXTJS"
                ? nextJSLogo
                : ""
            }
            layout="responsive"
            alt="category cover image"
            className="w-60 h-60 sm:h-96 mt-12"
          />
        </div>
        <div className="relative">
          <div className="p-6 z-20 relative pb-6 m-4 mx-auto -mt-12 lg:max-w-2xl sm:px-10 sm:mx-12 bg-gray-50 dark:bg-slate-600 border-2 border-black dark:border-none">
            <div className="flex items-start justify-center flex-col">
              <p className="inline-block text-2xl font-semibold sm:text-3xl text-gray-800 dark:text-gray-300">
                {categoryName}
              </p>
              <div className="text-gray-800 dark:text-gray-300">
                <p>{categoryDescription}</p>
              </div>
            </div>
          </div>
          <div className="absolute left-14 bottom-2 w-[352px] h-[105px] z-10 bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
