"use client";

import { useState } from "react";

export default function EarningPage() {
  const [activeTab, setactiveTab] = useState("overview");

  return (
    <div className="min-h-screen w-full bg-gray-50 p-4 md:p-8">
      {/* Main container */}
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-md p-6">
        {/* Header section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-800">My Earnings</h1>
          {/* Dropdown for selecting the month */}
          <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-700 focus:outline-none focus:ring focus:ring-green-500">
            <option>January</option>
            <option>February</option>
            <option>March</option>
            {/* Add more months as needed */}
          </select>
        </div>

        {/* Tabs for navigation */}
        <div className="mt-6">
          <ul className="flex border-b">
            <li className="mr-4">
              <button
                onClick={() => {
                  setactiveTab("overview");
                }}
                className={`px-4 py-2 font-semibold ${
                  activeTab === "overview"
                    ? "text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`}
              >
                Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setactiveTab("payout_history");
                }}
                className={`px-4 mr-4 py-2 ${
                  activeTab === "payout_history"
                    ? "font-bold text-green-500 border-b-2 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`}
              >
                Payout History
              </button>
            </li>
          </ul>
        </div>

        <div>
          {/* Statistics section */}
          <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {/* Total Views */}
            <StatCard title="Total Views" value="0" />
            {/* Total Ads Viewed */}
            <StatCard title="Total Ads Viewed" value="0" />
            {/* Estimated Earnings */}
            <StatCard title="Estimated Earnings" value="0" />
          </div>

          {/* Monetization message */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600">
              Create at least{" "}
              <span className="font-medium text-gray-800">5 itineraries</span>{" "}
              and a total of{" "}
              <span className="font-medium text-gray-800">1,000 views</span> in
              a month to enable monetization.
            </p>
          </div>

          {/* Progress and illustration */}
          <div className="flex flex-col items-center mb-8 space-y-4">
            {/* Illustration */}
            <div className="w-28 h-28 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-gray-400 text-sm">Illustration</span>
            </div>
            {/* Progress metrics */}
            <div className="text-sm text-gray-500 space-y-1">
              <p>
                <span className="font-medium text-gray-800">0</span>/5
                itineraries created
              </p>
              <p>
                <span className="font-medium text-gray-800">0</span>/1,000
                itineraries views
              </p>
            </div>
          </div>

          {/* Apply Now button */}
          <div className="text-center p-5">
            <button
              disabled
              className="bg-gray-300  text-gray-600 px-6 py-2 rounded-lg cursor-not-allowed focus:outline-none"
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Reusable StatCard Component
function StatCard({ title, value }) {
  return (
    <div className="bg-gray-50 border-2 border-gray-3 flex px-6 py-5 gap-4 items-start justify-start flex-col  rounded-xl shadow-sm text-center">
      <p className="text-lg text-gray-800 font-semibold">{title}</p>
      <p className="text-3xl  font-bold text-gray-800">{value}</p>
    </div>
  );
}
