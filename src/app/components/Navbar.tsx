import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white dark:bg-french-gray fixed w-full z-20 top-0 start-0 border-b border-french-gray dark:border-french-gray">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo-letters.png"
            alt="Shortest Path Logo"
            width={50}
            height={50}
            priority
          />
          <span className="text-black self-center text-2xl font-semibold whitespace-nowrap dark:text-black-olive">
            Shortest Path
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-black hover:french-gray focus:ring-4 focus:outline-none focus:#6E8787 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-black-600 dark:hover:black dark:focus:black"
          >
            Schedule a Consultation
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-french-gray0 dark:text-french-gray dark:hover:bg-french-gray dark:focus:ring-french-gray"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-french-gray rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-french-gray dark:border-french-gray">
            <li>
              <a
                href="#solutions"
                className="block py-2 px-3 text-black-olive bg-white rounded md:bg-transparent md:text-gunmetal md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Solutions
              </a>
            </li>
            <li>
              <a
                href="#why-shortest-path"
                className="block py-2 px-3 text-black-olive rounded hover:gunmetal md:hover:bg-transparent md:hover:text-gunmetal md:p-0 md:dark:hover:text-blue-500 dark:text-black-olive dark:hover:bg-gunmetal dark:hover:text-black-olive md:dark:hover:bg-transparent dark:border-gunmetal"
              >
                Why Shortest Path
              </a>
            </li>
            <li>
              <a
                href="#what-we-do"
                className="block py-2 px-3 text-black-olive rounded hover:gunmetal md:hover:bg-transparent md:hover:text-gunmetal md:p-0 md:dark:hover:text-blue-500 dark:text-black-olive dark:hover:bg-gunmetal dark:hover:text-black-olive md:dark:hover:bg-transparent dark:border-french-gray"
              >
                What We Do
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-black-olive rounded hover:french-gray md:hover:bg-transparent md:hover:text-gunmetal md:p-0 md:dark:hover:text-blue-500 dark:text-black-olive dark:hover:bg-french-gray dark:hover:text-black-olive md:dark:hover:bg-transparent dark:border-french-gray"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
