const express = require('express');
const path = require('path');

const app = express();

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve frontend files later
app.use(express.static(path.join(__dirname, '../client/dist')));

// API route for testing
app.get('/api/test', (req, res) => {
    res.json({ message: 'Flashcards server is running!' });
});

module.exports = app;
