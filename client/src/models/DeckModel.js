class DeckModel {
    constructor(name, id = `deck-${Date.now()}`) {
      this.name = name; // Name of the deck
      this.id = id; // Unique identifier for the deck
      this.cards = []; // Array of flashcards
    }
  
    /**
     * Adds a new flashcard to the deck.
     * @param {string} question - The question for the flashcard.
     * @param {string} answer - The answer for the flashcard.
     */
    addCard(question, answer) {
      const card = {
        question,
        answer,
        id: `card-${Date.now()}`, // Unique identifier for the card
      };
      this.cards.push(card);
    }
  }
  
  // Export the class for use in other files
  export default DeckModel;
  