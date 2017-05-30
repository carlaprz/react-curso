import React, { Component } from 'react';

function Color ({onRemove, title, value}) {
  return (
    <div style={{backgroundColor: value}}>
      <button onClick={onRemove}>remove</button>
      <div>color: {title}</div>
    </div>
  )
}

export default Color;
