import React from 'react';

export default function ({selected, onRate}) {
  return (
    <span onClick={onRate} style={{cursor: 'pointer', color: selected ? 'red' : 'black'}}>*</span>
  )
}
