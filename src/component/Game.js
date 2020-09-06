import React, {useState, useEffect} from 'react';
import Cards from './Cards';

const Game = function (props) {
  const cardDetails = props.cards.map((card) => ({
    card,
    isFlipped: true,
    canFlip: true,
  }));
  const [cards, setCards] = useState(cardDetails);
  const [firstGuess, setFirstGuess] = useState(null);
  const [secondGuess, setSecondGuess] = useState(null);

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setCards((cards) => cards.map((card) => ({...card, isFlipped: false})));
      clearTimeout(timeOutId);
    }, 1000);
  }, []);

  const updateState = function (condition) {
    setCards((cards) =>
      cards.map((c) => {
        if (c.card === firstGuess || c.card === secondGuess) {
          return {...c, ...condition};
        }
        return {...c};
      })
    );
    setFirstGuess(null);
    setSecondGuess(null);
  };

  useEffect(() => {
    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        return updateState({canFlip: false});
      }

      const timeOutId = setTimeout(() => {
        updateState({isFlipped: false});
        clearTimeout(timeOutId);
      }, 1000);
    }
  }, [firstGuess, secondGuess]);

  const flipCard = function (index) {
    setCards((cards) => {
      const newCards = cards.map((card) => ({...card}));
      newCards[index].isFlipped = true;
      return newCards;
    });
    const card = cards[index].card;
    !firstGuess ? setFirstGuess(card) : setSecondGuess(card);
  };

  return <Cards cards={cards} flipCard={flipCard} />;
};

export default Game;
