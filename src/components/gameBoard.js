import React, { useState, useEffect } from "react"
import GameCircle from "./GameCircle";
import Footer from './footer'
import Header from './header'
import '../style.css'
import {player_1,no_player,player_2,Game_state_idle,Game_state_playing,Game_state_win,Game_state_draw} from '../constants'

function isWinner(gameBoard,currrentMove,currentPlayer) {
    let board = [...gameBoard]
    board[currrentMove] = currentPlayer;
    const winLines = [
      [0,1,2,3],
      [4,5,6,7],
      [8,9,10,11],
      [12,13,14,15],
      [0,4,8,12],
      [1,5,9,13],
      [2,6,10,14],
      [3,7,11,15],
      [0,5,10,15],
      [3,6,9,12]
    ];
    for (let i = 0;i<winLines.length;i++){
      const [c1,c2,c3,c4] = winLines[i];
      if(board[c1] > 0 && board[c1] === board[c2] && board[c2] === board[c3] && board[c3] === board[c4]){
          return true
      }
    }
    return false
}

function isDraw(gameBoard,currentMove,currrentPlayer){
    let board = [...gameBoard]
    board[currentMove] = currrentPlayer;
    let count = board.reduce((n,x) => n + (x === 0),0)
    return count === 0;
}

function getRandomComputerMove(gameBoard) {
    let validMoves = [];
    for (let i=0; i<gameBoard.length;i++){
        if(gameBoard[i] === 0){
            validMoves.push(i);
        }
    }
    let rndMove = Math.floor(Math.random()*validMoves.length);
    return validMoves[rndMove]
}

function getPosition(gameBoard,moveChecks){}

function getComputerMove(gameBoard) {
    let moveChecks = [
        {
            indexes:[0,4,8,12],
            max:4,
            step:1
        },
        {
            indexes:[0,1,2,3],
            max:16,
            step:4
        },
        {
            indexes:[0,5,10,15],
            max:16,
            step:16
        },
        {
            indexes:[3,6,9,12],
            max:16,
            step:16
        }

    ]
}

const GameBoard = () => {
    const [gameBoard, setGameBoard] = useState(Array(16).fill(no_player));
    const [currentPlayer, setCurrentPlayer] = useState(player_1);
    const [gameState,setGameState] = useState(Game_state_playing);
    const [winPlayer,setWinPlayer] = useState(no_player);

    const circleClicked = (id) => {

        if(gameBoard[id]!== no_player) return;
        if(gameState!==Game_state_playing) return;

        if(isWinner(gameBoard,id,currentPlayer)){
           setGameState(Game_state_win);
           setWinPlayer(currentPlayer);
        }

        if(isDraw(gameBoard,id,currentPlayer)){
            setGameState(Game_state_draw);
            setWinPlayer(no_player);
         }

        setGameBoard(prev => {
            return prev.map((circle, pos) => {
                if (pos === id) return currentPlayer;
                return circle;
            })
        })


        setCurrentPlayer(currentPlayer === player_1 ? player_2 : player_1);

    }

    const suggestMove = () => {
        console.log('yash');
        circleClicked(getComputerMove(gameBoard));
    }

    const renderCircle = (id) => {
        return (
            <GameCircle key={id} id={id} className={`player-${gameBoard[id]}`} onCircleClicked={circleClicked} />
        )
    }

    useEffect(() => {
        initBoard();
    }, []);

    const initBoard = () => {
        setCurrentPlayer(player_1);
        setGameState(Game_state_playing);
        setGameBoard(Array(16).fill(no_player));
    }

    const circles = [];
    for (let i = 0; i < 16; i++) {
        circles.push(renderCircle(i));
    }

    return (
        <>
            <Header player={currentPlayer} gameState={gameState} winPlayer={winPlayer}/>
            <div className="gameboard">
                {circles}
            </div>
            <Footer onClickEvent={initBoard} onSuggestClick={suggestMove}/>
        </>
    )
}

export default GameBoard;
