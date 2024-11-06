import React from 'react';

function Card(props) {
  return (
    <div className='Card'>
      <p className='para'>{props.quote}</p>
      <img className='image1' src={props.image1} alt="image1" />
    </div>
  );
}

export default Card;
