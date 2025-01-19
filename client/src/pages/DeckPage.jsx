import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDecks, saveDeck } from '../utils/deckUtils';
import '../styles/global.css';

const DeckPage = () => {
  const { id } = useParams(); // Get the deck ID from the route
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);
  const [newCardQuestion, setNewCardQuestion] = useState('');
  const [newCardAnswer, setNewCardAnswer] = useState('');

  // Load the deck data
  useEffect(() => {
    const decks = getDecks();
    const currentDeck = decks.find((d) => d.id === parseInt(id));
    if (!currentDeck) {
      alert('Deck not found!');
      navigate('/decks'); // Redirect if deck doesn't exist
    } else {
      setDeck(currentDeck);
    }
  }, [id, navigate]);

  // Add a new card to the deck
  const handleAddCard = () => {
    if (!newCardQuestion.trim() || !newCardAnswer.trim()) {
      alert('Both question and answer are required!');
      return;
    }
    const updatedDeck = {
      ...deck,
      cards: [...deck.cards, { question: newCardQuestion, answer: newCardAnswer }],
    };
    saveDeck(updatedDeck); // Update the deck in localStorage
    setDeck(updatedDeck); // Update the state
    setNewCardQuestion(''); // Reset input fields
    setNewCardAnswer('');
  };

  return (
    <div className="deck-page">
      <Navbar />
      <main className="deck-main">
        {deck && (
          <>
            <h1>{deck.name}</h1>
            <p>{deck.description}</p>
            {/* Add Card Form */}
            <div className="add-card-form">
              <input
                type="text"
                placeholder="Card Question"
                value={newCardQuestion}
                onChange={(e) => setNewCardQuestion(e.target.value)}
              />
              <input
                type="text"
                placeholder="Card Answer"
                value={newCardAnswer}
                onChange={(e) => setNewCardAnswer(e.target.value)}
              />
              <button onClick={handleAddCard}>+ Add Card</button>
            </div>
            {/* List of Cards */}
            <div className="cards-list">
              {deck.cards.length === 0 ? (
                <p>No cards in this deck. Add some to get started!</p>
              ) : (
                deck.cards.map((card, index) => (
                  <div className="card-item" key={index}>
                    <p>
                      <strong>Q:</strong> {card.question}
                    </p>
                    <p>
                      <strong>A:</strong> {card.answer}
                    </p>
                  </div>
                ))
              )}
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DeckPage;
