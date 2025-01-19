import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDecks, saveDeck, deleteDeck } from '../utils/deckUtils';
import '../styles/global.css';
import '../styles/DecksPage.css';

const DecksPage = () => {
  const [decks, setDecks] = useState([]);
  const [newDeckName, setNewDeckName] = useState('');
  const [newDeckDescription, setNewDeckDescription] = useState('');

  // Load decks from localStorage on component mount
  useEffect(() => {
    setDecks(getDecks());
  }, []);

  // Add a new deck
  const handleAddDeck = () => {
    if (!newDeckName.trim()) {
      alert('Deck name is required!');
      return;
    }
    const newDeck = {
      id: Date.now(), // Unique ID for the deck
      name: newDeckName,
      description: newDeckDescription,
      cards: [], // Initialize with an empty cards array
    };
    saveDeck(newDeck); // Save the new deck
    setDecks(getDecks()); // Refresh the list of decks
    setNewDeckName(''); // Reset input fields
    setNewDeckDescription('');
  };

  // Delete a deck
  const handleDeleteDeck = (id) => {
    if (window.confirm('Are you sure you want to delete this deck?')) {
      deleteDeck(id); // Remove the deck
      setDecks(getDecks()); // Refresh the list of decks
    }
  };

  return (
    <div className="decks-container">
      <Navbar />
      <main className="decks-main">
        <h1>My Decks</h1>
        {/* Add Deck Form */}
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
        {/* Deck List */}
        <div className="decks-list">
          {decks.length === 0 ? (
            <p>No decks available. Create one to get started!</p>
          ) : (
            decks.map((deck) => (
              <div className="deck-item" key={deck.id}>
                <h3>{deck.name}</h3>
                <p>{deck.description}</p>
                <button className="edit-button">View/Edit</button>
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
