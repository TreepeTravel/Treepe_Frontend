"use client";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect, useContext } from "react";
import NavPopup from "./popups/NavPopup";

// Navbar component
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile menu visibility
  const [isNavpopupOpen, setisNavpopupOpen] = useState(false);

  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null); // Reference for dropdown to detect outside clicks
  const router = useRouter(); // Hook for navigation

  const { login, setlogin } = useContext(GlobalContext);

  const handleViewProfile = () => {
    setIsDropdownOpen(false);
    router.push("/account");
  };

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close dropdown and mobile menu if clicked outside
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  const handleNavPopup = () => {
    setisNavpopupOpen(!isNavpopupOpen);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false); // Close dropdown
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg  z-50">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className=" flex h-16 items-center justify-between">
          <div className="flex gap-2 items-center justify-center">
            {/* Mobile menu button */}

            {/* Logo */}
            <div
              className="flex font-extrabold  text-2xl italic  tracking-tight items-center cursor-pointer"
              onClick={() => router.push("/")}
            >
              Tripe.com
            </div>
          </div>

          {/* Centered navigation links */}
          <div className="hidden sm:flex sm:ml-6 sm:justify-center flex-grow">
            <div className="flex space-x-4">
              <button
                onClick={() => router.push("/")}
                className="relative group rounded-md px-3 py-2 text-base font-medium text-gray-700"
              >
                Home
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
              <button
                onClick={() => router.push("/itinerary")}
                className="relative group rounded-md px-3 py-2 text-base font-medium text-gray-700"
              >
                Itinerary
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-green-600 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </button>
            </div>
          </div>

          {/* Create Itinerary Button and Profile dropdown */}
          <div className="flex items-center justify-center ml-auto">
            {/* Search Icon */}

            <button className="mr-5 lg:hidden sm:hidden md:hidden xl:hidden ">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.7473 16.4825L14.4102 13.17C15.7056 11.5537 16.3329 9.50215 16.1631 7.43721C15.9934 5.37227 15.0396 3.45088 13.4978 2.06813C11.9559 0.685379 9.94333 -0.0536394 7.87376 0.00303437C5.80419 0.0597081 3.83498 0.907766 2.37103 2.37283C0.907077 3.83789 0.0596628 5.8086 0.00303206 7.87974C-0.0535986 9.95088 0.684859 11.965 2.06656 13.508C3.44826 15.051 5.36819 16.0056 7.43156 16.1754C9.49493 16.3453 11.5449 15.7175 13.16 14.4212L16.47 17.7337C16.5536 17.8181 16.6531 17.8851 16.7627 17.9308C16.8723 17.9765 16.9899 18 17.1086 18C17.2274 18 17.3449 17.9765 17.4546 17.9308C17.5642 17.8851 17.6636 17.8181 17.7473 17.7337C17.9094 17.5659 18 17.3416 18 17.1081C18 16.8747 17.9094 16.6504 17.7473 16.4825ZM8.11399 14.4212C6.8687 14.4212 5.65139 14.0516 4.61597 13.3593C3.58056 12.6669 2.77355 11.6828 2.297 10.5315C1.82045 9.38009 1.69577 8.11316 1.93871 6.89088C2.18165 5.6686 2.78131 4.54586 3.66186 3.66464C4.54241 2.78343 5.66429 2.18331 6.88565 1.94018C8.107 1.69706 9.37297 1.82184 10.5235 2.29875C11.674 2.77566 12.6573 3.58328 13.3491 4.61948C14.041 5.65568 14.4102 6.87392 14.4102 8.12015C14.4102 9.79129 13.7469 11.394 12.5661 12.5757C11.3853 13.7573 9.78386 14.4212 8.11399 14.4212Z"
                  fill="#218B00"
                />
              </svg>
            </button>
            {/* Create Itinerary Button */}
            <button
              onClick={() => router.push("/create-itinerary")}
              className="mr-4 rounded-full  flex gap-1 bg-green-600 px-4 py-2.5 text-sm font-semibold tracking-wider text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="20px"
                fill="#FFFFFF"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
              <span className="hidden sm:inline"> Create Itinerary</span>
            </button>

            {/* Profile dropdown */}

            {login ? (
              <div ref={dropdownRef} className="relative">
                <button
                  type="button"
                  onClick={toggleDropdown}
                  className="relative flex items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                  aria-expanded={isDropdownOpen}
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="User Avatar"
                  />
                  <svg
                    className="ml-1 h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div
                    ref={dropdownRef} // Attach the ref to the dropdown element
                    className="absolute right-0  px-1 z-10 mt-2 w-52  origin-top-right rounded-2xl bg-slate-50 py-4 shadow-lg ring-1 ring-black ring-opacity-5"
                  >
                    {/* Dropdown menu items */}
                    <div className="flex border-b-2 py-3 w-full gap-5  border-gray-400 bg-white items-center justify-center">
                      <img
                        className="h-10 w-10 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt="User Profile"
                      />
                      <div className="flex items-center justify-start flex-col">
                        <span className="text-lg text-black font-bold">
                          Souptik Das
                        </span>
                        <button
                          onClick={() => {
                            handleViewProfile();
                          }}
                          className="text-xs w-full text-start font-semibold text-green-500"
                        >
                          View Profile
                        </button>
                      </div>
                    </div>
                    <div className="flex gap-1 mt-1 flex-col justify-center">
                      <button
                        onClick={() =>
                          router.push("/account?itinerary=my_itinerary")
                        }
                        className="block w-full text-left font-medium border-b-2 border-gray-400 px-4 py-2 text-sm text-gray-700"
                      >
                        My itineraries
                      </button>
                      <button
                        onClick={() =>
                          router.push("/account?itinerary=liked_itinerary")
                        }
                        className="block w-full font-medium text-left border-b-2 border-gray-400 px-4 py-2 text-sm text-gray-700"
                      >
                        Liked itineraries
                      </button>
                      <button
                        onClick={() => router.push("/earning")}
                        className="block w-full font-medium text-left border-b-2 border-gray-400 px-4 py-2 text-sm text-gray-700"
                      >
                        My Earnings
                      </button>
                      <button
                        onClick={() => router.push("/under_development")}
                        className=" gap-1  mt-2 items-center  flex justify-center w-full  px-4 py-2 text-sm font-medium text-red-500"
                      >
                        Logout
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20px"
                          viewBox="0 -960 960 960"
                          width="20px"
                          fill="#EA3323"
                        >
                          <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  handleNavPopup();
                }}
                className="text-green-600 text-lg font-bold "
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>

      {isNavpopupOpen ? (
        <NavPopup onClose={() => setisNavpopupOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
