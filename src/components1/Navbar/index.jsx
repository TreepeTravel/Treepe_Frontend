"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // return (
  //   <nav className="bg-white  shadow-md">
  //     <div className="container  mx-auhref px-4 sm:px-6 lg:px-8">
  //       <div className="flex items-center  justify-between h-16">
  //         {/* Logo on the left */}
  //         <div className="flex border w-3 border-red-200  items-center ">
  //           <buthrefn
  //             className="font-bold text-xl bg-red-500    text-slate-950 "
  //             onClick={() => {
  //               router.push("/");
  //             }}
  //           >
  //             Tripe.com
  //           </buthrefn>
  //         </div>

  //         {/* Centered navigation */}
  //         <div className="hidden sm:flex sm:flex-grow justify-center space-x-8">
  //           <buthrefn
  //             onClick={() => router.push("/")}
  //             className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition"
  //           >
  //             Home
  //             <span className="absolute left-0 right-0 bothrefm-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  //           </buthrefn>
  //           <buthrefn
  //             onClick={() => router.push("/itineraries")}
  //             className="relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition"
  //           >
  //             Itinerary
  //             <span className="absolute left-0 right-0 bothrefm-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  //           </buthrefn>
  //         </div>

  //         {/* Right-aligned buthrefns */}
  //         <div className="flex items-center">
  //           <buthrefn
  //             onClick={() => router.push("/create-itinerary")}
  //             className="mr-4 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
  //           >
  //             + Create an Itinerary
  //           </buthrefn>

  //           {/* Profile dropdown */}
  //           <div ref={dropdownRef} className="relative">
  //             <buthrefn
  //               onClick={hrefggleDropdown}
  //               className="flex items-center bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
  //               aria-expanded={isDropdownOpen}
  //             >
  //               <img
  //                 className="h-8 w-8 rounded-full"
  //                 src="https://images.unsplash.com/phohref-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auhref=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  //                 alt=""
  //               />
  //               <svg
  //                 className="ml-1 h-4 w-4 text-gray-400"
  //                 fill="none"
  //                 viewBox="0 0 24 24"
  //                 stroke="currentColor"
  //                 strokeWidth={1.5}
  //               >
  //                 <path
  //                   d="M19 9l-7 7-7-7"
  //                   strokeLinecap="round"
  //                   strokeLinejoin="round"
  //                 />
  //               </svg>
  //             </buthrefn>

  //             {isDropdownOpen && (
  //               <div className="absolute right-0 z-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
  //                 <buthrefn
  //                   onClick={() => router.push("/under_development")}
  //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //                 >
  //                   Your Profile
  //                 </buthrefn>
  //                 <buthrefn
  //                   onClick={() => router.push("/under_development")}
  //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //                 >
  //                   Settings
  //                 </buthrefn>
  //                 <buthrefn
  //                   onClick={() => router.push("/under_development")}
  //                   className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
  //                 >
  //                   Sign out
  //                 </buthrefn>
  //               </div>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     {/* Mobile menu */}
  //     <div className={`sm:hidden ${isDropdownOpen ? "block" : "hidden"}`}>
  //       <div className="px-2 pt-2 pb-3 space-y-1">
  //         <buthrefn
  //           onClick={() => router.push("/")}
  //           className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-200"
  //         >
  //           Home
  //         </buthrefn>
  //         <buthrefn
  //           onClick={() => router.push("/itineraries")}
  //           className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:bg-gray-200"
  //         >
  //           Itinerary
  //         </buthrefn>
  //       </div>
  //     </div>
  //   </nav>
  // );

  return (
    <nav className="bg-white shadow">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo on the left */}
          <div className="flex items-center">
            {/* <img className="h-8 w-auto" src="" alt="Your Company" /> */}
            <svg width={200} height={50} xmlns="http://www.w3.org/2000/svg">
              <rect width="100%" height="100%" fill="#FFFFFF" />{" "}
              {/* Background color */}
              <text x={10} y={40} fontFamily="Arial" fontSize={28} fill="">
                Tripe.com
              </text>
            </svg>
          </div>

          {/* Centered navigation links */}
          <div className="hidden sm:flex sm:ml-6 sm:justify-center flex-grow">
            <div className="flex space-x-4">
              <Link
                href="/"
                className="relative group rounded-md px-3 py-2 text-base font-medium text-gray-700"
              >
                Home
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <Link
                href="/itineraries"
                className="relative group rounded-md px-3 py-2 text-base font-medium text-gray-700"
              >
                Itinerary
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </div>
          </div>

          {/* Create Itinerary Button and Profile dropdown on the right */}
          <div className="flex  items-center ml-auto">
            {/* Create Itinerary Button */}
            <button className="mr-4 rounded-full bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              + Create an Itinerary
            </button>

            {/* Profile dropdown */}
            <div ref={dropdownRef} className="relative">
              <div>
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className={`relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300`}
                  id="user-menu-button"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className={`absolute -inset-1.5`}></span>
                  <span className={`sr-only`}>Open user menu</span>
                  <img
                    className={`h-8 w-8 rounded-full`}
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt=""
                  />
                  {/* Downward arrow icon */}
                  <svg
                    className="ml-1 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  className={`absolute flex  items-center justify-between flex-col px-4 right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white py-3 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role={`menu`}
                  aria-orientation={`vertical`}
                  aria-labelledby={`user-menu-button`}
                >
                  <div className="flex border-b-2 py-3 bg-white items-center justify-center ">
                    <img
                      className={`h-8 w-8 rounded-full`}
                      src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                      alt=""
                    />
                    <div className="flex flex-col ">
                      <span className="text-sm ml-4 text-black   font-medium">
                        Souptik Das
                      </span>
                      <button className=" text-xs text-green-500 ">
                        View Profile
                      </button>
                    </div>
                  </div>
                  <div className="w-full flex flex-col  justify-center">
                    <Link
                      href="/under_development"
                      className={`block border-b-2 border-gray-600 px-4 py-2 text-sm text-gray-700`}
                      role={`menuitem`}
                    >
                      My itineraries
                    </Link>
                    <Link
                      href="/under_development"
                      className={`block border-b-2 px-4 py-2 text-sm text-gray-700`}
                      role={`menuitem`}
                    >
                      Liked itineraries
                    </Link>
                    <Link
                      href="/under_development"
                      className={`block border-b-2 px-4 py-2 text-sm text-gray-700`}
                      role={`menuitem`}
                    >
                      My Earnings
                    </Link>
                  </div>
                  <Link
                    href="/under_development"
                    className={`block  px-4 py-3   text-sm font-medium text-red-500`}
                    role={`menuitem`}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden ${isDropdownOpen ? "block" : "hidden"}`}
        id={`mobile-menu`}
      >
        <div className={`space-y=1 px=2 pb=3 pt=2`}>
          {/* Mobile links */}
          <Link
            href="/"
            className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}
          >
            Home
          </Link>
          <Link
            href="/itineraries"
            className={`block rounded-md px3 py2 text-base font-medium text-gray300 hover:bg-gray700 hover:text-white`}
          >
            Itinerary
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
