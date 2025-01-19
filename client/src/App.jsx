import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DecksPage from './pages/DecksPage';
import DeckPage from './pages/DeckPage'; // Import the new DeckPage
import './styles/global.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks" element={<DecksPage />} />
        <Route path="/deck/:id" element={<DeckPage />} /> {/* New Route */}
      </Routes>
    </Router>
  );
};

export default App;
