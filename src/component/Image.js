import React from 'react';

const Img = function (props) {
  return (
    <div className={props.side}>
      <img className="image" src={props.src} alt={props.side} />
    </div>
  );
};

export default Img;
