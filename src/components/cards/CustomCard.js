import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import Card2 from "./Card2";

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
  },
];

function CustomCard({ bigTitle, style, greenHeading }) {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  // Horizontal scroll handling
  const handleScroll = (event) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY;
    }
  };

  return (
    <div
      className={`flex flex-col items-start justify-start    bg-gray-100 p-4 ${
        style ? "" : " py-10"
      } `}
    >
      {greenHeading ? (
        <h1 className="text-left uppercase text-lg mb-5 text-green-600 font-semibold tracking-widest">
          {greenHeading}
        </h1>
      ) : null}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl ml-5 font-bold mb-10">
        {bigTitle}
      </h1>
      <div
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          className="flex overflow-x-scroll scrollbar-hide space-x-4 p-2"
          ref={scrollRef}
          onWheel={handleScroll}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="w-96 sm:w-96 md:w-1/3 lg:w-1/4 xl:w-[25%] flex-shrink-0"
            >
              <Card card={card} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CustomCard;
