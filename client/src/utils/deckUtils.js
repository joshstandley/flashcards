const DECKS_KEY = 'flashcards_decks';

// Get all decks from localStorage
export const getDecks = () => {
  const decks = localStorage.getItem(DECKS_KEY);
  return decks ? JSON.parse(decks) : [];
};

// Save all decks to localStorage
export const saveDecks = (decks) => {
  localStorage.setItem(DECKS_KEY, JSON.stringify(decks));
};

// Add a new deck to localStorage
export const addDeck = (deck) => {
  const decks = getDecks();
  const updatedDecks = [...decks, deck];
  saveDecks(updatedDecks);
};

// Update an existing deck in localStorage
export const updateDeck = (updatedDeck) => {
  const decks = getDecks();
  const updatedDecks = decks.map((deck) =>
    deck.id === updatedDeck.id ? updatedDeck : deck
  );
  saveDecks(updatedDecks);
};

// Delete a deck from localStorage
export const deleteDeck = (id) => {
  const decks = getDecks();
  const updatedDecks = decks.filter((deck) => deck.id !== id);
  saveDecks(updatedDecks);
};

// Get a specific deck by ID
export const getDeckById = (id) => {
  const decks = getDecks();
  return decks.find((deck) => deck.id === id) || null;
};
