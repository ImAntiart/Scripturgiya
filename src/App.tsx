// src/App.tsx
import React from 'react';
import './App.css'; // Импортируем стили
import Footer from './components/3.footer/Footer';
import Header from './components/1.header/Header';
import Main from './components/2.main/Main';

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
};

export default App;