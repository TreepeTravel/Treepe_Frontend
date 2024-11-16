"use client";
import LandingPage from "./LandingPage";
import LandingPage2 from "./LandingPage2";

function HeroSection() {
  return (
    <>
      {/* First Hero Section */}
      <div className="">
        <section className="pt-12 sm:pb-16 lg:pt-3">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="grid grid-cols-1 gap-8 mt-2 items-center w-full justify-between lg:grid-cols-2">
              {/* Text Section */}
              <div className="text-center mb-16 lg:text-left">
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                  Dare to experience the Journey you have always wanted.
                </h1>
                <p className="mt-4 text-md text-slate-600 sm:mt-6 font-inter">
                  India's first travel itinerary maker & sharing platform.
                </p>

                {/* Special block session */}
                <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-6 shadow-lg px-6 py-4 mt-12 bg-slate-50 w-full max-w-lg rounded-3xl mx-auto lg:mx-0">
                  {/* First half */}
                  <div className="flex items-center gap-4 justify-center lg:justify-start">
                    {/* Location logo */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="24px"
                      fill="#04b910"
                    >
                      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                    </svg>
                    <div className="flex flex-col items-start justify-start">
                      {/* Location representation */}
                      <span className="text-xs font-medium text-gray-700 items-center justify-start flex">
                        Location
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 -960 960 960"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M480-360 280-560h400L480-360Z" />
                        </svg>
                      </span>
                      <span className="capitalize text-black text-sm font-bold">
                        Sai Chouck, New Delhi
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <span className="text-gray-400 hidden lg:block">|</span>

                  {/* Second half */}
                  <div className="flex gap-6 items-center justify-center lg:justify-start">
                    <div className="flex items-center gap-4 justify-between">
                      {/* Duration logo */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#04b910"
                      >
                        <path d="M200-640h560v-80H200v80Zm0 0v-80 80Zm0 560q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v227q-19-9-39-15t-41-9v-43H200v400h252q7 22 16.5 42T491-80H200Zm520 40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Zm67-105 28-28-75-75v-112h-40v128l87 87Z" />
                      </svg>
                      <div className="flex flex-col items-start justify-start">
                        {/* Duration representation */}
                        <span className="text-xs font-medium text-gray-700 items-center justify-start flex">
                          Duration
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 -960 960 960"
                            width="24px"
                            fill="#000000"
                          >
                            <path d="M480-360 280-560h400L480-360Z" />
                          </svg>
                        </span>
                        <span className="capitalize text-black text-sm font-bold">
                          3 days
                        </span>
                      </div>
                    </div>

                    {/* Search button */}
                    <button className="p-2 bg-green-600 text-white hover:bg-green-700 rounded-full transition duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeLinecap="1.5"
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="flex  justify-center h-[80%] relative">
                {/* Image 1 */}
                <img
                  className=" max-w-md  rounded-t-full rounded-lg object-cover shadow-xl"
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Travel Journey"
                />

                {/* Image 2 */}
                <img
                  className="w-36 h-52 border-8 border-gray-100 rounded-t-full rounded-b-full rounded-lg object-cover absolute right-10 top-3/4 transform -translate-y-1/2"
                  src="https://images.pexels.com/photos/2108845/pexels-photo-2108845.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Travel Journey"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Second Hero Section */}
      <div className="bg-white">
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-16">
          <div className="mx-auto max-w-7xl sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-x-24">
              {/* Image Section */}
              <div className="flex justify-start relative">
                {/* Image 1 */}
                <img
                  className="w-full max-w-md h-auto rounded-t-full rounded-b-full rounded-lg object-cover shadow-xl"
                  src="https://plus.unsplash.com/premium_photo-1679916743693-03ea85e16b5c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Travel Journey"
                />

                {/* Image 2 */}
                <img
                  className="w-48 sm:w-72 max-w-md border-8 border-white rounded-t-full rounded-b-full rounded-lg object-cover absolute right-0 top-3/4 transform -translate-y-1/2"
                  src="https://images.unsplash.com/photo-1534313314376-a72289b6181e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D"
                  alt="Travel Journey"
                />
              </div>

              {/* Text Section */}
              <div className="text-center lg:text-left mt-28 pt-24">
                <h3 className="text-green-600 font-semibold tracking-widest text-sm uppercase">
                  Feature
                </h3>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Create & share custom itineraries with your community
                </h1>
                <p className="mt-4 text-lg text-gray-600 sm:w-3/4 md:w-4/5 mx-auto lg:mx-0 sm:mt-6 font-inter">
                  Create & earn while traveling, create exceptional routes and
                  plans for your community, upload them to{" "}
                  <span className="font-semibold">Tripe</span> and monetize it.
                  Simple!
                </p>
                <div className="flex justify-center lg:justify-start mt-6">
                  <button
                    onClick={() => router.push("/create-itinerary")}
                    className="mr-4 rounded-full flex items-center justify-center gap-1 bg-green-600 px-6 py-4 text-sm font-semibold tracking-wider text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 -960 960 960"
                      width="20px"
                      fill="#FFFFFF"
                    >
                      <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
                    </svg>
                    Create Itinerary
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Additional Sections */}
      <LandingPage />
      <LandingPage2 />
    </>
  );
}

export default HeroSection;
