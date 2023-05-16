import React from 'react'
import '../style.css'

const clickMsg = (id) =>{
  alert("You clicked "+ id);
}

export default function GameCircle({id,children}) {
  const circleClicked = (id) =>{
    console.log('circle clicked '+id);
  }
  return (
    <div onClick={() => clickMsg(id)} className={`gamecircle ${id%2 === 0?"odd":"even"}`}>
        {children}
    </div>
  )
}
