import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Flashcard from '../components/Flashcard';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1>Welcome to Flashcards</h1>
        <p>Click on the card to flip it.</p>
        <Flashcard question="What is 2 + 2?" answer="4" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
