import React from "react";
import "./Board.css";

const Board = (props) => {

    return (
        <div className="boxes">
            {props.value}
        </div>
    )
};

export default Board;