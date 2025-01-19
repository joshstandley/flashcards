import React, { useState } from 'react';
import '../styles/Flashcard.css';

const Flashcard = ({ question, answer }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className={`flashcard ${flipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flashcard-front">
        <p>{question}</p>
      </div>
      <div className="flashcard-back">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Flashcard;
