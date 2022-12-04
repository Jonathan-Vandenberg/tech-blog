import javascriptImage from "../public/categories/javascriptImage.png";
import tailwindImage from "../public/categories/tailwindLogo.png";
import solidityLogo from "../public/categories/solidityLogo.png";
import theGraphImage from "../public/categories/theGraphImage.svg";
import graphQLLogo from "../public/categories/GraphQLLogo.png";
import securityLogo from "../public/categories/securityLogo.png";
import nextJSLogo from "../public/categories/nextJSLogoSquare.png";
import hardhatLogo from "../public/categories/hardhatLogo.png";

import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="container mx-auto dark:bg-slate-900 xl:dark:bg-transparent rounded-md">
      <section className="px-6 text-gray-800">
        <div className="grid md:grid-cols-4 gap-6">
          <Link legacyBehavior href={"/solidity"}>
            <div
              className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image news"
                src={solidityLogo}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!" area-label="solidity">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2 dark:text-gray-200">
                      Solidity
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link legacyBehavior href={"/hardhat"}>
            <a aria-label="hardhat">
              <div
                className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className="block">
                  <Image
                    alt="categories image trends"
                    src={hardhatLogo}
                    className="w-full p-6 transition duration-300 ease-linear align-middle"
                  />
                </div>
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-md font-bold m-2 dark:text-gray-200">
                        Hardhat
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </a>
          </Link>

          <Link legacyBehavior href={"/thegraph"}>
            <a aria-label="thegraph">
              <div
                className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className="block">
                  <Image
                    alt="categories image trends"
                    src={theGraphImage}
                    className="w-full transition duration-300 ease-linear align-middle p-9 lg:p-12"
                  />
                </div>
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-md font-bold m-2 dark:text-gray-200">
                        The Graph
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </a>
          </Link>

          <Link legacyBehavior href={"/security"}>
            <div
              className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image travel"
                src={securityLogo}
                className="w-full transition scale-125 duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!" aria-label="security">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2 dark:text-gray-200">
                      Security
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link legacyBehavior href={"/nextjs"}>
            <a aria-label="seo">
              <div
                className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className="block">
                  <Image
                    alt="categories image trends"
                    src={nextJSLogo}
                    className="w-full transition duration-300 ease-linear align-middle"
                  />
                </div>
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-md font-bold m-2 dark:text-gray-200">
                        NextJS
                      </h5>
                    </div>
                  </div>
                  <div className="hover-overlay">
                    <div
                      className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                      style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                    ></div>
                  </div>
                </a>
              </div>
            </a>
          </Link>

          <Link legacyBehavior href={"/javascript"}>
            <div
              className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image self development"
                src={javascriptImage}
                className="w-full transition duration-300 ease-linear align-middle p-11"
                layout="fill"
              />
              <a href="#!" aria-label="javascript">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2 dark:text-gray-200">
                      Javascript
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out  hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link legacyBehavior href={"/styling"}>
            <div
              className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image technology"
                src={tailwindImage}
                className="w-full transition duration-300 ease-linear align-middle"
                layout="fill"
              />
              <a href="#!" area-label="styling">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2 dark:text-gray-200">
                      Styling
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>

          <Link legacyBehavior href={"/graphql"}>
            <div
              className="zoom shadow-md relative dark:bg-sky-800 rounded-md overflow-hidden bg-no-repeat bg-cover bg-white/50"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image health"
                src={graphQLLogo}
                className="w-full transition duration-300 ease-linear align-middle p-10"
              />
              <a href="#!" aria-label="graphql">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2 dark:text-gray-200">
                      GraphQL
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
                    style={{ backgroundColor: "rgba(253, 253, 253, 0.15)" }}
                  ></div>
                </div>
              </a>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
