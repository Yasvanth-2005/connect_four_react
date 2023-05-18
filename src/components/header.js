import React from 'react'
import {Game_state_idle,Game_state_playing,Game_state_win,Game_state_draw} from '../constants'

export default function Header({gameState,player,winPlayer}) {
  const renderLabel = () => {
    switch (gameState) {
      case Game_state_playing:
        return <div>Player {player} Turn</div>
      case Game_state_win:
        return <div>Player {winPlayer} Wins</div>
        case Game_state_draw:
          return <div>Game is a draw</div>
        default:
    }
  }
  return (
    <div className='panel header'>
        <div className='header-text'>{renderLabel()}</div>
    </div>
  )
}
