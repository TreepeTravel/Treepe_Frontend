"use client";

import AdBanner from "./cards/AdBanner";
import CustomCard from "./cards/CustomCard";
import CustomCarousel from "./CustomCarousel";
import TopSearchDestination from "./TopSearchDestination";

export default function Itinerary() {
    return (
        <>
            {/* Header Section */}
            <div className="relative bg-gradient-to-r from-slate-900 to-slate-600 h-80 p-10 text-center">
                <h1 className="text-5xl mt-10 font-bold tracking-wider text-white">
                    Your Gateway to Extraordinary Adventures
                </h1>
                <p className="mt-6 mx-16 text-lg max text-white">
                    Pack your bags and let Travel redefine your travel experience, where every journey is a story waiting to be told.
                </p>

                {/* Search Bar */}
                <div className="absolute bottom-[-60px] left-1/2 transform  -translate-x-1/2 w-[90%] lg:w-[80%] bg-white rounded-md shadow-lg px-4 lg:px-6  py-4 flex flex-col  lg:flex-row space-y-4 lg:space-x-4">
                    <div className="flex flex-col lg:flex-row items-center w-full gap-4 lg:gap-5 border border-gray-300 rounded-xl px-4 py-2">

                        {/* Destination Select */}
                        <SelectInput
                            label="Destination"
                            iconColor="#04b910"
                            borderStyle="lg:border-r-2 lg:pr-24"
                        />

                        {/* Starting Point Select */}
                        <SelectInput
                            label="Starting Point (Optional)"
                            iconColor="#EA3323"
                            borderStyle="lg:border-r-2 lg:px-12"
                        />

                        {/* Duration Select */}
                        <SelectInput
                            label="Duration (Optional)"
                            iconColor="#434343"
                            borderStyle="lg:border-r-2 lg:px-12"
                        />

                        {/* Cost Select */}
                        <SelectInput
                            label="Cost (Optional)"
                            iconColor="#04b910"
                            width="w-32"
                        />

                        {/* Search Button */}
                        <button className="flex items-center px-4 py-2 text-sm font-semibold bg-green-600 text-white hover:bg-green-700 rounded-full transition duration-300 gap-3">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeLinecap="1.5"
                                stroke="currentColor"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                />
                            </svg>
                            Search
                        </button>
                    </div>
                </div>

            </div>

            {/* Top Searched Destinations Section */}
            <section className="mt-32 text-center">
                <h2 className="text-4xl font-bold capitalize">Top Searched Destinations</h2>
                <p className="mt-4 text-lg text-gray-700">Favorite destinations of professional tourists</p>
            </section>

            {/* Carousel & Cards */}
            <CustomCarousel />
            <ContentCards />
        </>
    );
}

function SelectInput({ label, iconColor, borderStyle, width }) {
    return (
        <div className={`flex flex-col justify-start ${width || "w-auto"} ${borderStyle}`}>
            <label className="text-xs sm:text-sm font-medium text-gray-700">{label}</label>
            <div className="flex items-center justify-center">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill={iconColor}
                >
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                <select
                    className="block w-full px-2 py-2 bg-white text-sm sm:text-base font-medium capitalize tracking-wide rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                    <option value="">Select</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </div>
        </div>
    );
}

/* Content Cards Section */
function ContentCards() {
    return (
        <>
            <CustomCard bigTitle="Explore Nainital" />
            <AdBanner />
            <CustomCard bigTitle="Explore Itineraries" />
            <AdBanner />
            <CustomCard bigTitle="Explore Itineraries" />
            <CustomCard bigTitle="Explore Itineraries" />

        </>
    );
}
