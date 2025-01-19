# Flashcards

Flashcards is a lightweight, interactive flashcard application designed to help users study effectively. Built with modern web technologies, it offers a simple yet engaging interface to create, view, and flip through flashcards.

## Features

- **Create Decks:** Organize flashcards by subject or topic.
- **Interactive Cards:** Click on a card to flip between the question and answer.
- **Data Persistence:** Uses cookies and local storage to save your progress for 30 days.
- **Modular Design:** Ready for future enhancements, including PostgreSQL database support for subscribed users.

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Storage:** Cookies and Local Storage (PostgreSQL support planned)

## Installation

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flashcards.git
   cd flashcards
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. Open the application in your browser.
2. Create a new deck by entering the subject (e.g., Math).
3. Add questions and answers to the deck.
4. Click on a card to flip it and view the answer.

## Project Structure

```plaintext
flashcards/
├── backend/                  # Backend logic (Node.js/Express.js)
│   ├── controllers/          # Business logic
│   ├── models/               # Placeholder for database models
│   ├── routes/               # API routes
│   ├── middleware/           # Middleware functions
│   ├── app.js                # Express app setup
│   └── server.js             # Server entry point
├── frontend/                 # Frontend logic (HTML, CSS, JavaScript)
│   ├── css/                  # Stylesheets
│   ├── js/                   # Frontend JavaScript modules
│   └── index.html            # Main HTML file
├── public/                   # Static files
├── test/                     # Test cases
├── .gitignore                # Ignored files
├── package.json              # Project dependencies
├── README.md                 # Project documentation
└── LICENSE                   # Project license
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your branch and open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---
