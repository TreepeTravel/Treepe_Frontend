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
                    width="18"
                    height="18"
                    fill="white"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4.058..." />
                  </svg>
                </button>
              </div>
            </div>

            {/* Center Section */}
            <div className="flex sm:flex-row gap-8 sm:gap-16 flex-1 order-3 lg:order-2">
              {/* About */}
              <div>
                <h3 className="text-lg font-bold text-gray-800">About</h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm font-medium text-gray-500 hover:text-gray-600"
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
