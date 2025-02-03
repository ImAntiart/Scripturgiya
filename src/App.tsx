// src/App.tsx
import React from 'react';
import CardList from './components/CardList';
import cardData from './data/cardData';
import './App.css'; // Импортируем стили

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CardList cardData={cardData} />
    </div>
  );
};

export default App;