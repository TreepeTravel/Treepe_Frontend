"use client";

import { useState } from "react";
import Card from "./cards/Card";

export default function UserProfile() {
  const cards = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1594477778796-48c808b4c443?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Falling in love with the streets and snow",
      para1: "Netherlands, Amsterdam.",
      para2: "By Souptik Das",
      likes: 235,
      price: "₹5000",
      duration: "10",
      place: "India, Delhi",
      likedByUser: true, // Indicates if the card is liked by the user
    },
    {
      imgSrc:
        "https://lh5.googleusercontent.com/p/AF1QipPEtxCvsxVn7zW01vooJK9G4NhMwPeG5pwZk6Id=w675-h390-n-k-no",
      title: "Falling in love with the streets and snow",
      para1: "Netherlands, Amsterdam.",
      para2: "By Souptik Das",
      likes: 235,
      price: "₹5000",
      duration: "10",
      place: "India, Delhi",
      likedByUser: false,
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1729103728665-55096459acf1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Falling in love with the streets and snow",
      para1: "Netherlands, Amsterdam.",
      para2: "By Souptik Das",
      likes: 235,
      price: "₹5000",
      duration: "10",
      place: "India, Delhi",
      likedByUser: true,
    },
    {
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1661878122586-2d75a86f3400?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Falling in love with the streets and snow",
      para1: "Netherlands, Amsterdam.",
      para2: "By Souptik Das",
      likes: 235,
      price: "₹5000",
      duration: "10",
      place: "India, Delhi",
      likedByUser: false,
    },
  ];

  const [activeTab, setActiveTab] = useState("myItineraries");
  const [isEdit, setisEdit] = useState(false);

  const handleEdit = () => {
    // setisEdit(!isEdit);
  };

  // Filter cards based on the active tab
  const filteredCards =
    activeTab === "likedItineraries"
      ? cards.filter((card) => card.likedByUser)
      : cards;

  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Profile Header */}
        <div className="flex flex-col items-center sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex items-center flex-col sm:flex-row md:flex-row lg:flex-row xl:flex-row  justify-center gap-4">
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="User Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-300"
            />
            {isEdit ? (
              <form action="" className="text-center sm:text-left">
                <input
                  type="text"
                  name="username"
                  id="username"
                  value="Souptik Das"
                  className="text-2xl font-bold"
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value="souptikdas19@gmail.com"
                  className="text-gray-500"
                />
              </form>
            ) : (
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold">Souptik Das</h1>
                <p className="text-gray-500">souptikdas19@gmail.com</p>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              handleEdit();
            }}
            className=" flex gap-1 items-center justify-center border-2 border-green-500 text-green-600 font-medium px-4 py-3 rounded-3xl text-sm hover:bg-green-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 -960 960 960"
              width="16px"
              fill="#04b910"
            >
              <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l448-447q11-11 25.5-17t30.5-6q16 0 31 6t27 18l55 56q12 11 17.5 26t5.5 31q0 15-5.5 29.5T777-687L330-240H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z" />
            </svg>
            Edit Profile
          </button>
        </div>

        {/* Tabs Section */}
        <div className="mt-6">
          <ul className="flex border-b">
            <li className="mr-4">
              <button
                onClick={() => setActiveTab("myItineraries")}
                className={`px-4 py-2 font-bold ${
                  activeTab === "myItineraries"
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`}
              >
                My Itineraries
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("likedItineraries")}
                className={`px-4 py-2 ${
                  activeTab === "likedItineraries"
                    ? "font-bold text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`}
              >
                Liked Itineraries
              </button>
            </li>
          </ul>
        </div>

        {/* Itinerary Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredCards.map((card, index) => (
            <Card key={index} index={index} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
