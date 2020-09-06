import React from 'react';
import Img from './Image';

const Card = function ({cardDetails, flipCard, id}) {
  const {card, isFlipped} = cardDetails;
  const handleChange = () => !isFlipped && flipCard(id);

  return (
    <label>
      <input type="checkbox" checked={isFlipped} onChange={handleChange} />
      <div className="card-holder">
        <div className="card">
          <Img side="front" src={`/PNG/${card}.png`} />
          <Img side="back" src="PNG/purple_back.png" />
        </div>
      </div>
    </label>
  );
};

export default Card;
