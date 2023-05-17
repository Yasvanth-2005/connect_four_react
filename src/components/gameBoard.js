import React, { useState, useEffect } from "react";
import GameCircle from "./GameCircle";
import '../style.css';

const no_player = 0;
const player_1 = 1;
const player_2 = 2;

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(no_player));
    const [currentPlayer, setCurrentPlayer] = useState(player_1);

    const circleClicked = (id) => {
        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })
        setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);
    }

    const renderCircle = (id) => {
        return (
            <GameCircle
                key={id}
                id={id}
                className={`player-${gameBoard[id]}`}
                onCircleClicked={circleClicked}
            />
        )
    }

    useEffect(() => {
        initBoard();
    }, []);

    const initBoard = () => {
        setCurrentPlayer(player_1);
        setGameBoard(Array(16).fill(no_player));
    }

    const circles = [];
    for (let i = 0; i < 16; i++) {
        circles.push(renderCircle(i));
    }

    return (
        <div className="gameboard">
            {circles}
        </div>
    )
}

export default GameBoard;
