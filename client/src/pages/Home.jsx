import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1>Welcome to Flashcards</h1>
        <p>
          Master your knowledge with our interactive flashcard app. Create decks, track progress, and ace your exams!
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
