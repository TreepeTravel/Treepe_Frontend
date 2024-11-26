"use client";

import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();
  return (
    <>
      {/* component */}
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-10 sm:pt-20 lg:px-8 lg:pt-10">
          <div className="flex flex-col lg:flex-row justify-between gap-8 xl:gap-16">
            {/* Left Section */}
            <div className="space-y-4 flex-1 order-1">
              <h1 className="font-extrabold text-2xl italic tracking-tight items-center cursor-pointer">
                Treepe
              </h1>
              <div className="text-gray-600 font-medium">
                <p className="text-sm leading-6">4517 Washington Ave.</p>
                <p className="text-sm leading-6">Machester, Kerlucky 39-364</p>
              </div>
              <div className="flex space-x-4">
                {/* Social Links */}
                {["Facebook", "GitHub", "YouTube"].map((platform, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <span className="sr-only">{platform}</span>
                    {/* SVG Placeholder */}
                    <svg
                      width="24"
                      height="24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M22 16.19C22 19.83..." fill="#218B00" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-col gap-4 flex-1 order-2 lg:order-3">
              <h1 className="text-gray-700 text-lg font-bold">Newsletter</h1>
              <p className="text-md">
                Subscribe to our newsletter and get exciting offers.
              </p>
              <div className="flex items-center rounded-3xl bg-white shadow-md px-4 py-3 gap-4 mt-6">
                <input
                  type="email"
                  name="footerEmail"
                  id="footerEmail"
                  className="w-full focus:ring-0 border-none text-gray-800 text-sm"
                  placeholder="Enter your email address"
                />
                <button className="bg-green-600 p-2 rounded-full">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.98227 16.3125C4.14227 16.3125 3.60977 16.0275 3.27227 15.69C2.61227 15.03 2.14727 13.6275 3.63227 10.65L4.28477 9.35249C4.36727 9.17999 4.36727 8.81999 4.28477 8.64749L3.63227 7.34999C2.13977 4.37249 2.61227 2.96249 3.27227 2.30999C3.92477 1.64999 5.33477 1.17749 8.30477 2.66999L14.7248 5.87999C16.3223 6.67499 17.1998 7.78499 17.1998 8.99999C17.1998 10.215 16.3223 11.325 14.7323 12.12L8.31227 15.33C6.85727 16.0575 5.77727 16.3125 4.98227 16.3125ZM4.98227 2.81249C4.57727 2.81249 4.26227 2.90999 4.06727 3.10499C3.51977 3.64499 3.73727 5.04749 4.63727 6.83999L5.28977 8.14499C5.52977 8.63249 5.52977 9.36749 5.28977 9.85499L4.63727 11.1525C3.73727 12.9525 3.51977 14.3475 4.06727 14.8875C4.60727 15.435 6.00977 15.2175 7.80977 14.3175L14.2298 11.1075C15.4073 10.5225 16.0748 9.74999 16.0748 8.99249C16.0748 8.23499 15.3998 7.46249 14.2223 6.87749L7.80227 3.67499C6.66227 3.10499 5.67977 2.81249 4.98227 2.81249Z"
                      fill="white"
                    />
                    <path
                      d="M9.05391 9.5625H5.00391C4.69641 9.5625 4.44141 9.3075 4.44141 9C4.44141 8.6925 4.69641 8.4375 5.00391 8.4375H9.05391C9.36141 8.4375 9.61641 8.6925 9.61641 9C9.61641 9.3075 9.36141 9.5625 9.05391 9.5625Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex  sm:flex-row gap-12 sm:gap-16 flex-1 order-3 lg:order-2">
              {/* About */}
              <div className="w-20">
                <h3 className="text-lg font-bold text-gray-800">About</h3>
                <ul className="mt-4  space-y-4">
                  <li className="w-">
                    <a
                      href="#"
                      className="text-sm  font-medium text-gray-500 hover:text-gray-600"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Features
                    </a>
                  </li>
                </ul>
              </div>
              {/* Company */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">Company</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Why Treepe
                    </a>
                  </li>
                  <li>
                    <a
                      href="/term_condition"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="/private_policy"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Private Policy
                    </a>
                  </li>
                </ul>
              </div>
              {/* Account */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">Account</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="/monitisation_policy"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Monetisation Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Feedback
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
