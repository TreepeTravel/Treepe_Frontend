"use client";
import React, { useRef } from "react";

const CustomCarousel = () => {
  const destinations = [
    {
      id: 1,
      name: "Amsterdam",
      itineraries: "874 Itineraries",
      imgSrc:
        "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcR34SB8iodQE7L0m46MBMx2T4DfsOWUh4hp09iTaM8GhatIpjraonv41cWR4jdylfCM8KYS2UbPkqy7OTguJ8AppCrCitroYe1zZfGaCw",
    },
    {
      id: 2,
      name: "Paris",
      itineraries: "1200 Itineraries",
      imgSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/15/6d/d6/paris.jpg?w=1400&h=1400&s=1",
    },
    {
      id: 3,
      name: "New York",
      itineraries: "950 Itineraries",
      imgSrc:
        "https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty.jpg",
    },
    {
      id: 4,
      name: "Tokyo",
      itineraries: "600 Itineraries",
      imgSrc:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/4b/5d/10/caption.jpg?w=1400&h=1400&s=1&cx=1005&cy=690&chk=v1_2ed86f729380ea073850",
    },
    {
      id: 5,
      name: "Sydney",
      itineraries: "450 Itineraries",
      imgSrc:
        "https://cdn.britannica.com/71/188471-050-CF188A6B/Sydney-Opera-House-Port-Jackson.jpg",
    },
    {
      id: 6,
      name: "Nainital",
      itineraries: "600 Itineraries",
      imgSrc:
        "https://s3.india.com/wp-content/uploads/2024/06/10-Fascinating-Facts-About-Nainital.jpg##image/jpg",
    },
    {
      id: 7,
      name: "Dubai",
      itineraries: "450 Itineraries",
      imgSrc:
        "https://a.eu.mktgcdn.com/f/100004519/xLeVc5XahQ14O2-lWv6n8JjqE1V8AAUSeyRHIiFfamQ.jpg",
    },
  ];

  const scrollRef = useRef(null);

  // Horizontal scroll handling
  const handleScroll = (event) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div className="relative mt-10 mx-5">
      <div
        ref={scrollRef}
        onWheel={handleScroll}
        className="flex gap-10 overflow-x-scroll scrollbar-hide"
      >
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex min-w-[300px] h-[130px] border border-gray-300 items-center bg-white shadow-sm rounded-lg p-3"
          >
            <img
              src={destination.imgSrc}
              alt={destination.name}
              width={80}
              height={80}
              className="rounded-full w-20 h-20 object-cover"
            />
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-bold">{destination.name}</h3>
              <div className="flex mt-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#434343"
                >
                  <path d="M240-120v-680h390q14 0 26 6.5t20 17.5l124 176-124 176q-8 11-20 17.5t-26 6.5H320v280h-80Zm80-360h300l80-120-80-120H320v240Zm0 0v-240 240Z" />
                </svg>
                <p className="text-gray-600 ml-1">{destination.itineraries}</p>
              </div>
            </div>
            <div className="flex bg-slate-300 p-2 rounded-full mt-10 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="20px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#000000"
              >
                <path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
