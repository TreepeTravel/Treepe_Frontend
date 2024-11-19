"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AdBanner from "./cards/AdBanner";
import CustomCard from "./cards/CustomCard";
import CustomCarousel from "./CustomCarousel";
import TopSearchDestination from "./TopSearchDestination";

export default function Itinerary() {
  const searchParams = useSearchParams();
  const [formState, setFormState] = useState({
    location: searchParams.get("location") || "",
    startingPoint: "",
    duration: "",
    cost: "",
  });

  const handleInputChange = (field, value) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <div className="">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-slate-900 to-slate-600 h-80 p-10 text-center">
          <h1 className="text-5xl mt-10 font-bold tracking-wider text-white">
            Your Gateway to Extraordinary Adventures
          </h1>
          <p className="mt-6 mx-16 text-lg max text-white">
            Pack your bags and let Travel redefine your travel experience, where
            every journey is a story waiting to be told.
          </p>

          {/* Search Bar */}
          <div className="absolute border  bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[90%] lg:w-[80%] bg-white rounded-md shadow-lg px-4 lg:px-6 py-4 flex flex-col lg:flex-row space-y-4 lg:items-center lg:justify-between lg:space-x-4">
            <div className="border border-gray-300 w-full gap-5 bg-white rounded-md px-4 lg:px-6 py-4 flex flex-col lg:flex-row  lg:items-center lg:justify-between ">
              <SelectInput
                label="Destination"
                iconColor="#04b910"
                textInput={true}
                value={formState.location}
                onChange={(value) => handleInputChange("location", value)}
                placeholder="Enter Location"
              />
              <span className="bg-gray-200 w-0.5  h-14 px-0 py-1 hidden lg:block"></span>
              <SelectInput
                label="Starting Point (Optional)"
                iconColor="#EA3323"
                textInput={true}
                value={formState.startingPoint}
                onChange={(value) => handleInputChange("startingPoint", value)}
                placeholder="Enter Starting Point"
              />
              <span className="bg-gray-200 w-0.5  h-14 px-0 py-1 hidden lg:block"></span>
              <SelectInput
                label="Duration (Optional)"
                value={formState.duration}
                onChange={(value) => handleInputChange("duration", value)}
                placeholder="Select Duration"
                options={[
                  { value: "1D 0N", label: "1 Day 0 Night" },
                  { value: "1D 1N", label: "1 Day 1 Night" },
                  { value: "2D 0N", label: "2 Day 0 Night" },
                  { value: "2D 1N", label: "2 Day 1 Night" },
                  { value: "2D 2N", label: "2 Day 2 Night" },
                  { value: "3D 0N", label: "3 Day 0 Night" },
                ]}
              />
              <span className="bg-gray-200 w-0.5  h-14 px-0 py-1 hidden lg:block"></span>
              <SelectInput
                label="Cost (Optional)"
                textInput={true}
                value={formState.cost}
                onChange={(value) => handleInputChange("cost", value)}
                placeholder="Enter Cost"
              />

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
          <h2 className="text-4xl font-bold capitalize">
            Top Searched Destinations
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Favorite destinations of professional tourists
          </p>
        </section>

        {/* Carousel & Cards */}
        <CustomCarousel />
        <ContentCards />
      </div>
    </>
  );
}

function SelectInput({
  label,
  iconColor,
  textInput,
  value,
  onChange,
  placeholder,
  options = [],
}) {
  return (
    <div className="flex flex-col justify-start   w-auto">
      <label className="text-xs text-start sm:text-sm font-medium text-gray-500">
        {label}
      </label>
      <div className="flex items-center">
        {iconColor && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20px"
            viewBox="0 -960 960 960"
            width="20px"
            fill={iconColor}
          >
            <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
          </svg>
        )}
        {textInput ? (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-2 text-sm font-bold text-black capitalize rounded-md shadow-sm focus:outline-none focus:ring-0 focus:ring-green-500"
            placeholder={placeholder}
          />
        ) : (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="appearance-none w-full bg-white text-sm font-bold text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-0 focus:ring-green-500 cursor-pointer"
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      </div>
    </div>
  );
}

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
