"use client";

import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";

export default function Card({ index, card }) {
  const [isLike, setIsLike] = useState(false);
  const router = useRouter();

  const { isDraft, setisDraft } = useContext(GlobalContext);

  const handleCardClick = () => {
    router.push(`/itinerary/cardpage?cardId=${index}`); // Navigate to card page with the card's ID or info
  };

  const handleLikeClick = (e) => {
    e.stopPropagation(); // Prevents triggering the card click event
    setIsLike(!isLike);
  };

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
        <div className="absolute top-3 right-3 bg-gray-600 bg-opacity-50 text-white text-xs px-2 py-1 rounded-lg flex items-center gap-1">
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
                  <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" />
                </svg>
              )}
            </button>
          </div>
        </div>
        {isDraft === true ? (
          <div className="flex items-center justify-center sm:flex-row sm:space-x-4 border-t pt-2 border-gray-300 mt-3 text-xs text-gray-500">
            <button className="mr-4 rounded-full  flex gap-1 bg-green-600 px-4 py-2.5 text-sm font-semibold tracking-wider text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
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
