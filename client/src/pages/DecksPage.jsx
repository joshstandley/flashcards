import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDecks, saveDeck, deleteDeck } from '../utils/deckUtils';
import '../styles/global.css';
import '../styles/DecksPage.css';

const DecksPage = () => {
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckDescription, setNewDeckDescription] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    setDecks(getDecks());
  }, []);

  const handleAddDeck = () => {
    if (!newDeckName.trim()) {
      alert('Deck name is required!');
      return;
    }
    const newDeck = {
      id: Date.now(),
      name: newDeckName,
      description: newDeckDescription,
      cards: [],
    };
    saveDeck(newDeck);
    setDecks(getDecks());
    setNewDeckName('');
    setNewDeckDescription('');
  };

  const handleDeleteDeck = (id) => {
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
        <div className="add-deck-form">
          <input
            type="text"
            placeholder="Deck Name"
            value={newDeckName}
            onChange={(e) => setNewDeckName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Deck Description (optional)"
            value={newDeckDescription}
            onChange={(e) => setNewDeckDescription(e.target.value)}
          />
          <button className="create-deck-button" onClick={handleAddDeck}>
            + Add Deck
          </button>
        </div>
        <div className="decks-list">
          {decks.length === 0 ? (
            <p>No decks available. Create one to get started!</p>
          ) : (
            decks.map((deck) => (
              <div className="deck-item" key={deck.id}>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <button
                  className="edit-button"
                  onClick={() => navigate(`/deck/${deck.id}`)} // Corrected navigation
                >
                  View/Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteDeck(deck.id)}
                >
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
