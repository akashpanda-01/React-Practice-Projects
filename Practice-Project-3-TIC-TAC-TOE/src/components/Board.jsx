import React from "react";
import { data } from "./content.jsx";
import "./Board.css";
import { useState } from "react";


const Board = () => {
  

  return (
    <>
      <div className="board">
        <div className="row1">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row2">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
        <div className="row3">
          <div className="boxes"></div>
          <div className="boxes"></div>
          <div className="boxes"></div>
        </div>
      </div>
    </>
  );
};

export default Board;
