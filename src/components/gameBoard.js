import React,{useState} from "react";
import GameCircle from "./GameCircle";
import '../style.css';



const GameBoard = () =>{
    const [gameBoard,setGameBoard] = useState(Array(16).fill(0))
    const circleClicked = (id) =>{
        alert('circle clicked ' + id);
        gameBoard[id] = 1;
        setGameBoard(gameBoard)
    }

 const renderCircle = (id) => {
    return(
        <GameCircle id={id} className={`player-${gameBoard[id]}`} onCircleClicked={circleClicked} />
    )
 }

    return(
        <div className="gameboard">
           {renderCircle(0)}
           {renderCircle(1)}
           {renderCircle(2)}
           {renderCircle(3)}
           {renderCircle(4)}
           {renderCircle(5)}
           {renderCircle(6)}
           {renderCircle(7)}
           {renderCircle(8)}
           {renderCircle(9)}
           {renderCircle(10)}
           {renderCircle(11)}
           {renderCircle(12)}
           {renderCircle(13)}
           {renderCircle(14)}
           {renderCircle(15)}
        </div>
    )
}

export default GameBoard;