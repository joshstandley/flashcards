import React, { useEffect, useRef } from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({ question, answer, resetAll }) => {
  const cardRef = useRef(null);

  // Reset the card instantly when resetAll changes
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.remove('flipped'); // Ensure the card is reset to the question side
    }
  }, [resetAll]);

  const handleFlip = () => {
    if (cardRef.current) {
      cardRef.current.classList.toggle('flipped'); // Toggle the flip state
    }
  };

  return (
    <div
      ref={cardRef}
      className="flashcard"
      onClick={handleFlip}
    >
      <div className="flashcard-front">
        {question}
      </div>
      <div className="flashcard-back">
        {answer}
      </div>
    </div>
  );
};

export default Flashcard;
