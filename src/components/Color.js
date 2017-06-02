import React, { Component } from 'react';
import Star from './Star';

function Color ({onRemove, title, value, rating, onRate}) {

  const Stars = [1,2,3,4,5].map((v, i) => {
    return <Star key={i} selected={v <= rating} onRate={() => {onRate(v)}} />;
  });

  return (
    <div style={{backgroundColor: value}}>
      <button onClick={onRemove}>remove</button>
      <div>color: {title}</div>
      {Stars}
    </div>
  );
}

export default Color;
