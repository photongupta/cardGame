import React from 'react';
import Card from './Card';

const Cards = function ({cards, flipCard}) {
  const cardDetails = cards.map((cardDetails, index) => (
    <Card
      key={index}
      id={index}
      cardDetails={cardDetails}
      flipCard={flipCard}
    />
  ));
  return <div className="cards-container">{cardDetails}</div>;
};
export default Cards;
