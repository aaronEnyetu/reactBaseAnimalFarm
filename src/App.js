import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { animals } from './data.js';
import backgroundImage from './background.png';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Header />
      <Main animals={animals} />
      <Footer />
    </div>
  );
}

export default App;
