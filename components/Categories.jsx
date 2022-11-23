import javascriptImage from "../public/categories/javascriptImage.png";
import tailwindImage from "../public/categories/tailwindLogo.png";
import solidityLogo from "../public/categories/solidityLogo.png";
import SEOImage from "../public/categories/SEOImage.png";
import graphQLLogo from "../public/categories/GraphQLLogo.png";
import securityLogo from "../public/categories/securityLogo.png";

import Image from "next/image";
import Link from "next/link";

export default function App() {
  return (
    <div className="container mx-auto py-2 bg-white/40">
      <section className="px-6 pb-8 text-gray-800">
        <div className="grid lg:grid-cols-3 gap-6">
          <Link legacyBehavior href={"/javascript"}>
            <div
              className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
              style={{ backgroundPosition: "50%" }}
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              <Image
                alt="categories image self development"
                src={javascriptImage}
                className="w-full transition duration-300 ease-linear align-middle p-4"
                layout="fill"
              />
              <a href="#!" aria-label="javascript">
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                  // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                >
                  <div className="flex justify-start items-end h-full">
                    <h5 className="text-md font-bold text-gray-900 m-2">
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
              className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
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
                    <h5 className="text-md font-bold text-gray-900 m-2">
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
              className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
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
                    <h5 className="text-md font-bold text-gray-900 m-2">
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

          <Link legacyBehavior href={"/solidity"}>
            <div
              className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
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
                    <h5 className="text-md font-bold text-gray-900 m-2">
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

          <Link legacyBehavior href={"/security"}>
            <div
              className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
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
                    <h5 className="text-md font-bold text-gray-900 m-2">
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

          <Link legacyBehavior href={"/seo"}>
            <a aria-label="seo">
              <div
                className="zoom shadow-md relative overflow-hidden bg-no-repeat bg-cover"
                style={{ backgroundPosition: "50%" }}
                data-mdb-ripple="true"
                data-mdb-ripple-color="dark"
              >
                <div className="block">
                  <Image
                    alt="categories image trends"
                    src={SEOImage}
                    className="w-full transition duration-300 ease-linear align-middle"
                  />
                </div>
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    // style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
                  >
                    <div className="flex justify-start items-end h-full">
                      <h5 className="text-md font-bold text-white m-2">SEO</h5>
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
        </div>
      </section>
    </div>
  );
}
