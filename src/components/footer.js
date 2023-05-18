import React from 'react'

export default function Footer({onClickEvent,onSuggestClick}) {
  return (
    <div className='panel footer'>
       <button onClick={onClickEvent}>New Game</button>
       <button onClick={onSuggestClick}>Suggest</button>
    </div>
  )
}
