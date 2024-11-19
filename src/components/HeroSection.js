"use client";
import SelectInput from "@/components1/SelectInput";
import LandingPage from "./LandingPage";
import LandingPage2 from "./LandingPage2";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CustomCard from "./cards/CustomCard";

function HeroSection() {
  const router = useRouter();

  const [searchForm, setsearchForm] = useState({
    location: "Sai Chouck, New Delhi",
    duration: "",
  });

  const handleSearch = () => {
    router.push(
      `/itinerary?location=${searchForm.location}&duration=${searchForm.duration}`
    );
  };

  return (
    <>
      {/* First Hero Section */}
      <div className="">
        <section className="pt-12 sm:pb-16 lg:pt-3">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="grid grid-cols-1 gap-8  items-center w-full justify-between lg:grid-cols-2">
              {/* Text Section */}
              <div className="text-center mb-16 lg:text-left">
                <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                  Dare to experience the Journey you have always wanted.
                </h1>
                <p className="mt-4 text-md text-slate-600 sm:mt-6 font-inter">
                  India's first travel itinerary maker & sharing platform.
                </p>

                {/* Special block session */}
                <div className="flex flex-col lg:flex-row  lg:justify-between items-center gap-6 shadow-lg px-6 py-4 mt-12 bg-slate-50 w-full max-w-lg rounded-3xl mx-auto lg:mx-0">
                  {/* First half */}
                  <div className="flex w-full  items-center gap-3 justify-start lg:justify-start">
                    {/* Location logo */}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.0006 12.3108C12.5802 12.3108 13.8606 11.0304 13.8606 9.45082C13.8606 7.87129 12.5802 6.59082 11.0006 6.59082C9.42109 6.59082 8.14062 7.87129 8.14062 9.45082C8.14062 11.0304 9.42109 12.3108 11.0006 12.3108Z"
                        fill="white"
                        stroke="#218B00"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.31823 7.78242C5.12406 -0.155913 16.8849 -0.146746 18.6816 7.79159C19.7357 12.4483 16.8391 16.3899 14.2999 18.8283C12.4574 20.6066 9.5424 20.6066 7.69073 18.8283C5.16073 16.3899 2.26406 12.4391 3.31823 7.78242Z"
                        fill="white"
                        stroke="#218B00"
                        strokeWidth="1.5"
                      />
                    </svg>

                    <div className="flex flex-col items-start justify-start">
                      {/* Location representation */}
                      <span className="text-xs  font-medium text-gray-700 items-center justify-start flex">
                        Location
                      </span>

                      <input
                        type="text"
                        name="location"
                        id="location"
                        defaultValue="Sai Chouck, New Delhi"
                        className="capitalize focus:border-none p-1 focus:ring-0 text-black  text-sm font-bold"
                      />
                    </div>
                  </div>

                  {/* Separator */}
                  <span className="text-gray-400 hidden  lg:block">|</span>

                  <div className="flex justify-between border-t pt-3 lg:pt-0 lg:border-none border-gray-300 w-full  items-center ">
                    {/* Second half */}
                    <div className="flex gap-3 items-center justify-center  lg:justify-start">
                      {/* <div className="flex items-center gap-4 justify-between"> */}
                      {/* Duration logo */}

                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.0007 19.2499C10.9972 18.4451 10.7818 17.6555 10.3763 16.9603C9.97085 16.2652 9.38946 15.6891 8.69065 15.2899C8.96549 14.8756 9.12286 14.3945 9.146 13.8978C9.16915 13.4011 9.0572 12.9075 8.82208 12.4694C8.58696 12.0313 8.23747 11.6651 7.81078 11.4098C7.3841 11.1546 6.89619 11.0198 6.39898 11.0198C5.90178 11.0198 5.41387 11.1546 4.98719 11.4098C4.5605 11.6651 4.211 12.0313 3.97588 12.4694C3.74076 12.9075 3.62882 13.4011 3.65197 13.8978C3.67511 14.3945 3.83248 14.8756 4.10732 15.2899C3.41534 15.6937 2.84129 16.2718 2.44241 16.9666C2.04353 17.6615 1.83375 18.4487 1.83398 19.2499V20.1666H11.0007V19.2499Z"
                          fill="#218B00"
                        />
                        <path
                          d="M11.0007 1.83325C9.79687 1.83325 8.60487 2.07036 7.49272 2.53103C6.38057 2.99169 5.37004 3.66691 4.51884 4.51811C2.79976 6.23719 1.83398 8.56877 1.83398 10.9999H3.66732C3.66828 9.61137 4.06345 8.25163 4.80687 7.07885C5.55028 5.90607 6.61138 4.96846 7.86675 4.37506C9.12211 3.78166 10.5202 3.55687 11.8983 3.72684C13.2764 3.8968 14.5779 4.45453 15.6515 5.33515C16.7251 6.21578 17.5266 7.38311 17.9628 8.70136C18.3989 10.0196 18.4519 11.4346 18.1155 12.7818C17.7791 14.129 17.0671 15.353 16.0623 16.3114C15.0576 17.2698 13.8014 17.9233 12.4398 18.1958L12.7973 20.0291C15.0785 19.6338 17.1257 18.39 18.5276 16.5475C19.9294 14.705 20.5822 12.4002 20.3547 10.0962C20.1272 7.79226 19.0363 5.65968 17.3011 4.12692C15.566 2.59415 13.3151 1.77473 11.0007 1.83325Z"
                          fill="#218B00"
                        />
                        <path
                          d="M10.084 5.5V11.3758L13.0998 14.4008L14.4015 13.0992L11.9173 10.6242V5.5H10.084Z"
                          fill="#218B00"
                        />
                      </svg>

                      <div className="flex flex-col items-start  justify-start space-y-1">
                        {/* Label and Dropdown */}
                        {/* Dropdown */}
                        <span className="text-xs flex gap-1 font-medium text-gray-700">
                          Duration
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m19.5 8.25-7.5 7.5-7.5-7.5"
                            />
                          </svg>
                        </span>

                        <div className="flex items-center space-x-1">
                          <div className="relative">
                            <select
                              id="duration-select"
                              value={searchForm.duration}
                              onChange={(e) =>
                                setsearchForm((prevState) => ({
                                  ...prevState,
                                  duration: e.target.value, // Update the duration field
                                }))
                              }
                              className="appearance-none w-full bg-white text-sm font-bold text-gray-900  border border-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white cursor-pointer"
                            >
                              <option value="" disabled>
                                Select
                              </option>
                              <option value="1D 0N">1 Day 0 Night</option>
                              <option value="1D 1N">1 Day 1 Night</option>
                              <option value="2D 0N">2 Day 0 Night</option>
                              <option value="2D 1N">2 Day 1 Night</option>
                              <option value="2D 2N">2 Day 2 Night</option>
                              <option value="3D 0N">3 Day 0 Night</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Search button */}
                    </div>
                    <button
                      onClick={() => {
                        handleSearch();
                      }}
                      className="p-2 bg-green-600 text-white hover:bg-green-700 rounded-full transition duration-300"
                    >
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
              <div className="flex justify-center h-[80%] relative">
                {/* Image 1 */}
                <img
                  className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-t-full rounded-lg object-cover shadow-xl"
                  src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Travel Journey"
                />

                {/* Image 2 */}
                <img
                  className="w-24 h-36 sm:w-28 sm:h-36 md:w-32 md:h-44 lg:w-36 lg:h-60 border-4 sm:border-6 md:border-8 border-gray-100 rounded-t-full rounded-b-full rounded-lg object-cover absolute right-3 sm:right-8 md:right-2 top-3/4 sm:top-3/4 transform -translate-y-1/2"
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
                  className="w-full max-w-80 lg:max-w-md pl-3 h-auto rounded-t-full rounded-b-full rounded-lg object-cover shadow-xl"
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
              <div className="text-center lg:text-left lg:mt-28 pt-24">
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
      <CustomCard
        greenHeading="top iteriraries"
        bigTitle="The amazing place around the world "
      />
      <LandingPage2 />
    </>
  );
}

export default HeroSection;
