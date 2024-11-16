"use client";

import { useSearchParams } from "next/navigation";
import CustomCard from "./cards/CustomCard";

const cardInfo = [
  {
    imgSrc1:
      "https://images.unsplash.com/photo-1594477778796-48c808b4c443?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc2:
      "https://images.unsplash.com/photo-1594477778796-48c808b4c443?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc3:
      "https://images.unsplash.com/photo-1594477778796-48c808b4c443?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imgSrc4:
      "https://images.unsplash.com/photo-1594477778796-48c808b4c443?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Nainital solo trip for 5 nights 4 days",
    author: "Souptik Das",
    date: "14/08/24",
    destination: "Nainital",
    startingPoint: "Kolkata",
    budget: "₹8,500",
    essentials: [
      "Redeem wallet",
      "Get special deals",
      "Book faster",
      "Continue on any device",
    ],
    bestTime: ["January - March", "February - November"],
    overview:
      "Discover the serene beauty of Nainital, nestled amidst the Himalayas. Explore the picturesque lake, hike to the stunning viewpoint of Naina Peak, or simply relax at a cozy lakeside café. This 6-day solo trip offers the perfect blend of adventure, tranquility, and cultural immersion.",
  },
];

export default function CardInside() {
  const searchParams = useSearchParams();
  const cardId = searchParams.get("cardId"); // Get the 'cardId' query parameter
  const card = cardInfo[0]; // For now, we just use the first item

  return (
    <>
      <div className="flex bg-white flex-col lg:flex-row gap-8 p-4 lg:px-20 lg:py-10">
        {/* Left Section - Image Gallery */}
        <div className="lg:w-2/3 flex flex-col gap-4">
          <h1 className="text-3xl   font-bold text-gray-800">{card.title}</h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start sm:items-center">
            {/* Author and Date */}
            <p className="text-gray-600 text-sm sm:text-base">
              By <span className="font-semibold text-lg">{card.author}</span> on{" "}
              <span className="font-medium">{card.date}</span>
            </p>

            {/* Duration Badge */}
            <span className="px-2 sm:px-4 md:px-5 lg:px-6 border border-gray-500 rounded-2xl text-xs sm:text-sm md:text-base lg:text-sm  w-auto text-center">
              5N/6D
            </span>

            {/* Destination and Starting Point */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-2 sm:mt-0">
              {/* Destination */}
              <span className="px-2 py-1 font-semibold text-sm sm:text-base rounded text-gray-700 ">
                Destination: {card.destination}
              </span>

              {/* Starting Point with Icon */}
              <span className="flex items-center gap-1 text-sm sm:text-base font-semibold text-gray-700 px-2 py-1 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="14px"
                  viewBox="0 -960 960 960"
                  width="14px"
                  fill="currentColor"
                  className="text-gray-500"
                >
                  <path d="M480-280q83 0 141.5-58.5T680-480q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480q0 83 58.5 141.5T480-280Zm0 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                </svg>
                Starting Point: {card.startingPoint}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
            {/* Large Image on the left */}
            <div className="col-span-2 lg:col-span-2 row-span-2 relative">
              <img
                src={card.imgSrc1}
                alt="Gallery image 1"
                className="h-full w-full object-cover rounded-lg"
              />
              <button className="absolute bottom-2 left-2 bg-black text-white text-xs flex items-center justify-center gap-1 font-semibold px-3 py-2  rounded-2xl border border-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15px"
                  viewBox="0 -960 960 960"
                  width="15px"
                  fill="#FFFFFF"
                >
                  <path d="M360-400h400L622-580l-92 120-62-80-108 140Zm-40 160q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
                </svg>{" "}
                VIEW GALLERY →
              </button>
            </div>

            {/* Small Images on the right */}
            <img
              src={card.imgSrc2}
              alt="Gallery image 2"
              className="h-24 lg:h-48 w-full object-cover rounded-lg"
            />
            <img
              src={card.imgSrc3}
              alt="Gallery image 3"
              className="h-24 lg:h-48 w-full object-cover rounded-lg"
            />
            <img
              src={card.imgSrc4}
              alt="Gallery image 4"
              className="h-24 lg:h-48 w-full object-cover rounded-lg"
            />
            <img
              src={card.imgSrc4}
              alt="Gallery image 4"
              className="h-24 lg:h-48 w-full object-cover rounded-lg"
            />
          </div>

          <p className="text-gray-800 mt-4">{card.overview}</p>
        </div>

        {/* Right Section - Info Panels */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {/* Budget Card */}
          <div className="bg-green-200 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              Estimated Budget
            </h2>
            <p className="text-2xl font-bold text-green-700">
              {card.budget} / Adult
            </p>
            <p className="text-gray-500">Excluding personal cost</p>
          </div>

          {/* Essentials Card */}
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              Essential things to carry
            </h2>
            <ul className="text-gray-600 list-disc ml-4">
              {card.essentials.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Best Time to Visit Card */}
          <div className="bg-green-100 p-4 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-700">
              Best Time to visit
            </h2>
            <ul className="text-gray-600 list-disc ml-4">
              {card.bestTime.map((time, index) => (
                <li key={index}>{time}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-10 justify-start ">
        <span className=" px-10 font-semibold uppercase tracking-widest text-green-600">
          similar itineraries
        </span>
        <CustomCard
          style="mt-1"
          bigTitle="The amazing places around the World"
        />
      </div>
    </>
  );
}
