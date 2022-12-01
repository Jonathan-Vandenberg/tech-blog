import { useState, useEffect } from "react";
import logo from "../public/alt.png";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../components/icons/icons";

export default function App() {
  const [state, setState] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <div
          className="w-7 h-7 text-gray-8200"
          role="button"
          onClick={() => setTheme("light")}
        >
          <SunIcon />
        </div>
      );
    } else {
      return (
        <div className="w-7 h-7" role="button" onClick={() => setTheme("dark")}>
          <MoonIcon />
        </div>
      );
    }
  };

  const navigation = [
    { title: "Solidity", path: "/solidity" },
    { title: "Hardhat", path: "/hardhat" },
    { title: "NextJS", path: "/nextjs" },
    { title: "Javascript", path: "/javascript" },
    { title: "Styling", path: "/styling" },
    { title: "GraphQL", path: "/graphql" },
    { title: "Security", path: "/security" },
    { title: "TheGraph", path: "/thegraph" },
    { title: "About", path: "/about" },
  ];

  return (
    <nav className="bg-white/90 dark:bg-gray-800/90 w-full  md:static relative py-2">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between md:block">
          <div className="flex space-x-8 items-baseline">
            <div className="w-10 h-10 cursor-pointer">
              <Link legacyBehavior href={"/"}>
                <div className="dark:bg-white p-1">
                  <Image
                    src={logo}
                    width={300}
                    height={300}
                    alt="Float UI logo"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center md:hidden">
            {renderThemeChanger()}
          </div>
          <div className="md:hidden">
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border dark:text-gray-100"
              onClick={() => setState(!state)}
              aria-label="menu button"
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-7 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-4 md:space-y-0">
            {navigation.map((item, idx) => {
              return (
                <li key={idx} onClick={() => setState(!state)}>
                  <Link legacyBehavior href={item.path}>
                    <a className="text-gray-600 hover:text-gray-900 dark:text-gray-100 md:text-sm">
                      {item.title}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-center hidden md-visible">
          {renderThemeChanger()}
        </div>
      </div>
    </nav>
  );
}
