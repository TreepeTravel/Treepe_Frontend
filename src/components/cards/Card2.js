"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useState, useEffect, useRef } from "react";

export default function Card2({ index, card }) {
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null); // Ref for dropdown container

  const { isDraft, setisDraft } = useContext(GlobalContext);
  const [isDropdown, setIsDropdown] = useState(false);

  const handleCardClick = () => {
    router.push(`/itinerary/cardpage?cardId=${index}`); // Navigate to card page with the card's ID or info
  };

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevents triggering the card click event
    setIsLike(!isLike);
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation(); // Prevents dropdown toggle from triggering card click
    setIsDropdown(!isDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      onClick={handleCardClick}
      className="rounded-2xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl w-80 h-96 overflow-hidden cursor-pointer"
    >
      <div className="relative w-full h-1/2">
        <img
          src={card.imgSrc}
          alt={card.title}
          className="w-full h-full object-cover transition-all rounded-t-2xl"
        />
        {/* 10K views tag */}
        <div className="absolute top-3 right-3">
          <div className="flex items-center justify-center gap-1">
            <div className="flex bg-gray-600 bg-opacity-50 text-white text-xs px-2 py-1 rounded-md items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
                width="16px"
                fill="#FFFFFF"
              >
                <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
              </svg>
              <span className="font-medium">{card.duration}K</span>
            </div>
            <button
              onClick={handleDropdownToggle}
              className="bg-gray-400 bg-opacity-50 text-white text-xs py-1 rounded-sm flex items-center gap-1"
            >
              {/* Three dot button */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.05078 6.39062C6.68618 6.39062 6.39062 6.68618 6.39062 7.05078C6.39062 7.41537 6.68618 7.71094 7.05078 7.71094C7.41537 7.71094 7.71094 7.41538 7.71094 7.05078C7.71094 6.68618 7.41537 6.39062 7.05078 6.39062ZM7.05078 9.94531C6.68618 9.94531 6.39062 10.2409 6.39062 10.6055C6.39062 10.9701 6.68618 11.2656 7.05078 11.2656C7.41537 11.2656 7.71094 10.9701 7.71094 10.6055C7.71094 10.2409 7.41537 9.94531 7.05078 9.94531ZM7.05078 2.83594C6.68618 2.83594 6.39062 3.13149 6.39062 3.49609C6.39062 3.86068 6.68618 4.15625 7.05078 4.15625C7.41537 4.15625 7.71094 3.86069 7.71094 3.49609C7.71094 3.13149 7.41537 2.83594 7.05078 2.83594Z"
                  fill="black"
                  stroke="#FFFBFB"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
            {isDropdown && (
              <div
                ref={dropdownRef}
                className="absolute top-8 right-0 mt-2 w-40 bg-white opacity- border border-gray-200 rounded-md shadow-lg "
              >
                <ul className="text-sm text-gray-900 font-semibold">
                  <li
                    className="px-4 py-2 border-b  hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log("Delete clicked")}
                  >
                    Delete
                  </li>
                  <li
                    className="px-4 py-2 border-b hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log("Move to Trash clicked")}
                  >
                    Move to Trash
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => console.log("Share clicked")}
                  >
                    Share
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-4 flex flex-col justify-between h-1/2">
        <h2 className="text-base font-bold mb-1 text-gray-800">{card.title}</h2>
        <div className="flex justify-between items-center">
          <div>
            <div className="text-xs font-semibold text-gray-800 mb-2 space-y-1">
              <p>{card.para1}</p>
              <p className="">{card.para2}</p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              onClick={handleLikeClick}
              className={`flex items-center gap-1 transition ${
                isLike ? "text-red-500" : "text-gray-500"
              }`}
            >
              {card.likes}
              {isLike ? (
                <img src="/like.png" alt="liked" className="w-5 h-5" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#434343"
                >
                  <path d="..." />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isDraft === true ? (
          <div className="flex items-center justify-center sm:flex-row sm:space-x-4 border-t pt-2 border-gray-300 mt-3 text-xs text-gray-500">
            <button className="mr-4 rounded-full flex gap-1 bg-green-600 px-4 py-2.5 text-sm font-semibold tracking-wider text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Continue Editing
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-between sm:flex-row sm:space-x-4 border-t pt-2 border-gray-300 mt-3 text-xs text-gray-500">
            <span className="font-bold text-lg text-green-600">
              {card.price}
            </span>
            <span>
              <span className="font-bold text-xl">{card.duration}</span> days
              Itinerary
            </span>
            <span className="flex flex-col">
              <span className="font-bold text-sm capitalize">{card.place}</span>{" "}
              Starting Point
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
