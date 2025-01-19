import React, { useState } from 'react';
import Flashcard from './Flashcard';
import '../styles/Flashcards.css';

const Flashcards = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [resetAll, setResetAll] = useState(false); // Tracks whether all cards should reset

  const goToNext = () => {
    if (currentIndex < cards.length - 1) {
      setResetAll((prev) => !prev); // Trigger reset for all cards
      setCurrentIndex((prevIndex) => prevIndex + 1); // Move to the next card
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setResetAll((prev) => !prev); // Trigger reset for all cards
      setCurrentIndex((prevIndex) => prevIndex - 1); // Move to the previous card
    }
  };

  return (
    <div className="flashcards-container">
      {/* Left arrow */}
      <div className="arrow-container">
        <button
          className="flashcards-arrow"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
        >
          &#8249;
        </button>
      </div>

      {/* Flashcard */}
      <div className="flashcard-container">
        <Flashcard
          question={cards[currentIndex].question}
          answer={cards[currentIndex].answer}
          resetAll={resetAll} // Pass reset state to Flashcard
        />
      </div>

      {/* Right arrow */}
      <div className="arrow-container">
        <button
          className="flashcards-arrow"
          onClick={goToNext}
          disabled={currentIndex === cards.length - 1}
        >
          &#8250;
        </button>
      </div>
    </div>
  );
};

export default Flashcards;
