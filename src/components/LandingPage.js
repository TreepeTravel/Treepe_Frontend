import { useState } from "react";
import Card from "./cards/Card";
import CustomCard from "./cards/CustomCard";

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      isDraft: false,
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
      isDraft: true,
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
      isDraft: false,
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
      isDraft: true,
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 4)); // Ensure we don't go beyond the last set of cards
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0)); // Ensure we don't go below the first set of cards
  };

  return (
    <div className=" mt-10">
      <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {/* First line text aligned to the left */}
          <p className="text-left uppercase text-lg text-green-600 font-semibold tracking-widest">
            Top itineraries
          </p>

          <CustomCard bigTitle="Explore Nainital" />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
