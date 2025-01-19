import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/DecksPage.css';
import { getDecks, deleteDeck } from '../utils/deckUtils';

const DecksPage = ({ onNavigate }) => {
  const [decks, setDecks] = useState([]);

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
    <div className="decks-page">
      <Navbar onNavigate={onNavigate} />
      <main>
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
