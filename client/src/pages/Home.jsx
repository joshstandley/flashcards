import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Flashcard from '../components/Flashcard';
import { getDecks, createDeck } from '../utils/deckUtils';

const Home = () => {
  const [decks, setDecks] = useState([]);

  // Load decks on initial render
  useEffect(() => {
    setDecks(getDecks());
  }, []);

  // Handle new deck creation
  const handleCreateDeck = () => {
    const deckName = prompt('Enter a name for your new deck:');
    if (deckName) {
      createDeck(deckName);
      setDecks(getDecks()); // Reload decks
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <h1>Welcome to Flashcards</h1>
        <p>Organize and master your knowledge with custom flashcards.</p>
        
        {/* Sample Flashcard */}
        <Flashcard question="What is 2 + 2?" answer="4" />

        {/* Deck Management */}
        <div className="deck-management">
          <button onClick={handleCreateDeck}>Create New Deck</button>
          <h2>Your Decks</h2>
          <ul>
            {decks.map((deck) => (
              <li key={deck.id}>
                {deck.name} ({deck.cards.length} cards)
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
