import React from 'react';
import Game from './component/Game';
import {getCards} from './card-deck';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Guess and match the cards</h1>
      <Game cards={getCards(23)} />
    </div>
  );
}

export default App;
