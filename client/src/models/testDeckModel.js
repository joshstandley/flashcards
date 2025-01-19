import DeckModel from './DeckModel';

// Create a new deck
const mathDeck = new DeckModel('Math');
console.log('New Deck:', mathDeck);

// Add cards to the deck
mathDeck.addCard('What is 2 + 2?', '4');
mathDeck.addCard('What is 3 x 3?', '9');

// Verify the deck's structure
console.log('Updated Deck:', mathDeck);
