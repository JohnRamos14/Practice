import React from 'react';
import Square from './Square';
import '../styles.css';

const style = {
  border: '5px solid black',
  borderRadius: '10px',
  width: '500px',
  height: '500px',
  margin: '0 auto',
  display: 'grid',
  gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const Board = ({ squares, onClick }) => (
  <div className='main-board' style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;