const DECKS_KEY = 'flashcards_decks';

// Get all decks from localStorage
export const getDecks = () => {
  const decks = localStorage.getItem(DECKS_KEY);
  return decks ? JSON.parse(decks) : [];
};

// Save a deck to localStorage
export const saveDeck = (deck) => {
  const decks = getDecks();
  const updatedDecks = [...decks, deck];
  localStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
};

// Delete a deck from localStorage
export const deleteDeck = (id) => {
  const decks = getDecks();
  const updatedDecks = decks.filter((deck) => deck.id !== id);
  localStorage.setItem(DECKS_KEY, JSON.stringify(updatedDecks));
};
