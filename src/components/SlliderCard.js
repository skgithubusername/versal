import React, { useState } from "react";

const MultiCardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cards = [
    { image: "https://source.unsplash.com/random?1", title: "Card 1", description: "Info directing to another page." },
    { image: "https://source.unsplash.com/random?2", title: "Card 2", description: "Info directing to another page." },
    { image: "https://source.unsplash.com/random?3", title: "Card 3", description: "Info directing to another page." },
    { image: "https://source.unsplash.com/random?4", title: "Card 4", description: "Info directing to another page." },
    { image: "https://source.unsplash.com/random?5", title: "Card 5", description: "Info directing to another page." },
    { image: "https://source.unsplash.com/random?6", title: "Card 6", description: "Info directing to another page." },
  ];

  const totalCards = cards.length;
  const cardsToShow = 4; // Number of cards visible at a time

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + cardsToShow >= totalCards ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalCards - cardsToShow : prevIndex - 1
    );
  };

  return (
    <div className="mt-2 flex flex-col items-center">
      <div className="w-11/12">
        <div className="relative">
          <div className="flex space-x-4 overflow-hidden">
            {cards.slice(currentIndex, currentIndex + cardsToShow).map((card, index) => (
              <div key={index} className="flex-none w-1/4 p-4 bg-white rounded-lg shadow-md">
                <img className="w-full h-32 object-cover mb-4 rounded-lg" src={card.image} alt={card.title} />
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-gray-500">{card.description}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-4 absolute w-full top-1/2 transform -translate-y-1/2">
            <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center" onClick={handlePrev}>
              &lt;
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center" onClick={handleNext}>
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
