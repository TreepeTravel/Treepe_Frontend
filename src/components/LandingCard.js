"use client"

export default function LandingCard({ card, index }) {

  return (
    // <div key={index} className="flex-shrink-0 w-full sm:w-1/4 p-2">
    
      <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-auto"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{card.title}</h2>
          <p className="mt-2 text-gray-600 text-sm">
            {card.description}
          </p>
        </div>
      </div>
    // </div>
  )
}