import React from 'react';
import Game from './component/Game';
import {getCards} from './card-deck';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guess The Matching Cards</h1>
      <Game cards={getCards(23)} />
    </div>
  );
}

export default App;
