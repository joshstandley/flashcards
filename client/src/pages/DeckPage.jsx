import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getDecks, updateDeck } from '../utils/deckUtils';
import '../styles/global.css';
import '../styles/DeckPage.css';

const DeckPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [deck, setDeck] = useState(null);
  const [newCardQuestion, setNewCardQuestion] = useState('');
  const [newCardAnswer, setNewCardAnswer] = useState('');
  const [editingCardIndex, setEditingCardIndex] = useState(null); // Tracks the card being edited

  useEffect(() => {
    const decks = getDecks();
    const currentDeck = decks.find((d) => d.id === parseInt(id));
    if (!currentDeck) {
      alert('Deck not found!');
      navigate('/decks');
    } else {
      setDeck(currentDeck);
    }
  }, [id, navigate]);

  const handleAddCard = () => {
    if (!newCardQuestion.trim() || !newCardAnswer.trim()) {
      alert('Both question and answer are required!');
      return;
    }

    const newCard = {
      id: Date.now(), // Unique ID for the card
      question: newCardQuestion,
      answer: newCardAnswer,
    };

    const updatedDeck = {
      ...deck,
      cards: [...deck.cards, newCard],
    };

    updateDeck(updatedDeck); // Save the updated deck to localStorage
    setDeck(updatedDeck);
    setNewCardQuestion('');
    setNewCardAnswer('');
  };

  const handleDeleteCard = (cardId) => {
    const updatedDeck = {
      ...deck,
      cards: deck.cards.filter((card) => card.id !== cardId),
    };

    updateDeck(updatedDeck);
    setDeck(updatedDeck);
  };

  const handleEditCard = (index) => {
    setEditingCardIndex(index);
    setNewCardQuestion(deck.cards[index].question);
    setNewCardAnswer(deck.cards[index].answer);
  };

  const handleSaveEdit = () => {
    if (!newCardQuestion.trim() || !newCardAnswer.trim()) {
      alert('Both question and answer are required!');
      return;
    }

    const updatedCards = [...deck.cards];
    updatedCards[editingCardIndex] = {
      ...updatedCards[editingCardIndex],
      question: newCardQuestion,
      answer: newCardAnswer,
    };

    const updatedDeck = {
      ...deck,
      cards: updatedCards,
    };

    updateDeck(updatedDeck);
    setDeck(updatedDeck);
    setNewCardQuestion('');
    setNewCardAnswer('');
    setEditingCardIndex(null); // Exit editing mode
  };

  return (
    <div className="deck-container">
      <Navbar />
      <main className="deck-main">
        {deck && (
          <>
            <h1>{deck.name}</h1>
            <p>{deck.description}</p>
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
              {editingCardIndex !== null ? (
                <button onClick={handleSaveEdit}>Save Changes</button>
              ) : (
                <button onClick={handleAddCard}>+ Add Card</button>
              )}
            </div>
            <div className="cards-list">
              {deck.cards.length === 0 ? (
                <p>No cards in this deck. Add some to get started!</p>
              ) : (
                deck.cards.map((card, index) => (
                  <div className="card-item" key={card.id}>
                    <p>
                      <strong>Q:</strong> {card.question}
                    </p>
                    <p>
                      <strong>A:</strong> {card.answer}
                    </p>
                    <button onClick={() => handleEditCard(index)}>Edit</button>
                    <button onClick={() => handleDeleteCard(card.id)}>Delete</button>
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
