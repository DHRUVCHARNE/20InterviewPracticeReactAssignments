import React from "react";
import "./styles.css";
import { useState, useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

function TicTacToe() {
  const [square, setSquare] = useState(Array(9).fill(""));
  const [isXNext, setIsXNext] = useState(true);
  const [getWin, setGetWin] = useState("");

  function handleClick(getCurrSquare) {
    let cpySquares = [...square];
    if (cpySquares[getCurrSquare]) return;
    cpySquares[getCurrSquare] = isXNext ? "X" : "O";
    setIsXNext(!isXNext);
    setSquare(cpySquares);
  }

  function Winner(square) {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [6, 4, 2],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];

    for (let i = 0; i < winPattern.length; i++) {
      const [a, b, c] = winPattern[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  }

  useEffect(() => {
    const winner = Winner(square);
    if (winner) {
      setGetWin(`Congrats! ${winner} is the Winner `);
    } else if (square.every((s) => s !== "")) {
      setGetWin("It's a Draw. No one wins!");
    }
  }, [square, isXNext]);

  return (
    <div className="tic-tac-toe-container">
      <h1>Tic Tac Toe Game</h1>
      <div>{getWin && <h2>{getWin}</h2>}</div>
      <div>
        {getWin == "" && (
          <h3>{`Next Turn is : Player ${isXNext ? "X" : "O"}`}</h3>
        )}
      </div>

      <div className="row">
        <Square value={square[0]} onClick={() => handleClick(0)} />
        <Square value={square[1]} onClick={() => handleClick(1)} />
        <Square value={square[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handleClick(3)} />
        <Square value={square[4]} onClick={() => handleClick(4)} />
        <Square value={square[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handleClick(6)} />
        <Square value={square[7]} onClick={() => handleClick(7)} />
        <Square value={square[8]} onClick={() => handleClick(8)} />
      </div>

      <button
        style={{ padding: "10px", margin: "10px" ,border: "1px solid", borderRadius: "5px",backgroundColor:"skyblue"}}
        onClick={() => {
          setSquare(Array(9).fill(""));
          setGetWin("");
          setIsXNext(true);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default TicTacToe;
