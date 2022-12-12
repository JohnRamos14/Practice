import React, { useState } from 'react';
import { calculateWinner } from '../winner';
import Board from './Board';
import '../styles.css';

// const styles = {
//   width: '200px',
//   margin: '20px auto'
// };

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);

  const handleClick = i => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    // If user click an occupied square or if game is won, return
    if (winner || squares[i]) return;
    // Put an X or an O in the clicked square
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXisNext(!xIsNext);
  };

  return (
    <>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div className="next-move">
        {winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')}
      </div>
    </>
  );
};

export default Game;
