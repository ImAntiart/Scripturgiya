// src/App.tsx
import React from 'react';
import './App.css'; // Импортируем стили
import Footer from './components/3.footer/footer';

const App: React.FC = () => {
  return (
    <div className="app-container">

      <Footer/>
    </div>
  );
};

export default App;