import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Flashcards from '../components/Flashcards';

const Home = () => {
  const sampleCards = [
    { question: 'What is 2 + 2?', answer: '4' },
    { question: 'What is the capital of France?', answer: 'Paris' },
    { question: 'What is the square root of 16?', answer: '4' },
  ];

  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1>Welcome to Flashcards</h1>
        <p>Click on the arrows to navigate through flashcards.</p>
        <Flashcards cards={sampleCards} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
