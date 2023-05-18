import React from 'react'

export default function isWinner(gameBoard) {
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
    if(gameBoard[c1] > 0 && gameBoard[c1] === gameBoard[c2] && gameBoard[c2] === gameBoard[c3] && gameBoard[c3] === gameBoard[c4]){
        return true
    }
    else{
        return false
    }
  }
  return (
    <div>winner_combinations</div>
  )
}
