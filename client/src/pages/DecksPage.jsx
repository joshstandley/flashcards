import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDecks, deleteDeck } from '../utils/deckUtils';
import '../styles/DecksPage.css';

const DecksPage = () => {
  const [decks, setDecks] = useState([]);

  // Load decks from localStorage
  useEffect(() => {
    setDecks(getDecks());
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this deck?')) {
      deleteDeck(id);
      setDecks(getDecks());
    }
  };

  return (
    <div className="decks-container">
      <Navbar />
      <main className="decks-main">
        <h1>My Decks</h1>
        <button className="create-deck-button">+ Create New Deck</button>
        <div className="decks-list">
          {decks.length === 0 ? (
            <p>No decks available. Create one to get started!</p>
          ) : (
            decks.map((deck) => (
              <div className="deck-item" key={deck.id}>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <button className="edit-button">Edit</button>
                <button className="delete-button" onClick={() => handleDelete(deck.id)}>
                  Delete
                </button>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DecksPage;
