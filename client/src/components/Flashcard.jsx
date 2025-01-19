import React, { useEffect, useRef, useState } from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({ question, answer, resetAll }) => {
  const [flipped, setFlipped] = useState(false);
  const cardRef = useRef(null);

  // Reset the flip state without animation when resetAll changes
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.classList.add('no-transition'); // Temporarily disable transitions
      cardRef.current.classList.remove('flipped'); // Ensure the card is not flipped
      setTimeout(() => {
        cardRef.current.classList.remove('no-transition'); // Re-enable transitions
      }, 0); // Allow DOM update before removing the class
    }
    setFlipped(false);
  }, [resetAll]);

  const handleFlip = () => {
    setFlipped((prev) => !prev); // Toggle the flip state
  };

  return (
    <div
      ref={cardRef}
      className={`flashcard ${flipped ? 'flipped' : ''}`}
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
