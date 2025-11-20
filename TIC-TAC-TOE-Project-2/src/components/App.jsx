import React from "react";
import circleImg from "../assets/circle.png";
import crossImg from "../assets/cross.png";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("")

  //   const board = ["", "", "", "", "", "", "", "", ""];
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [3, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  function checkWinner(newBoard) {
    for (let pattern of wins) {
      const [a, b, c] = pattern;

      if (
        newBoard[a] &&
        newBoard[a] === newBoard[b] &&
        newBoard[b] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }
    return null;
  }

  function handleClick(index) {
    
    if(board[index] !== "" || winner) return

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const win = checkWinner(newBoard);
    if(win){
        setWinner(win);
        return;
    }

   setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    setBoard(newBoard);
  }

  function handleReset () {
    setWinner("");
    setBoard(["", "", "", "", "", "", "", "", ""]);
  }

  return (
    <>
      <div className="game-container">
        <h1 className="title">
          TIC-TAC-TOE <span>React</span>
        </h1>
        {winner === true ? <h1>Congrats {winner} Wins 🎉</h1> :  <h1>Congrats {winner} Wins 🎉</h1>}
        <div className="board">
          {board.map((value, index) => {
            return (
              <div
                key={index}
                onClick={() => handleClick(index)}
                className="box"
              >
                {value === "X" && (
                  <img
                    src={crossImg}
                    style={{ width: "60px", height: "60px" }}
                  />
                )}
                {value === "O" && (
                  <img
                    src={circleImg}
                    style={{ width: "60px", height: "60px" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <button onClick={handleReset} className="reset-btn">Reset</button>
      </div>
    </>
  );
};

export default App;
