import React from 'react'
import '../style.css'

export default function GameCircle({id,children,onCircleClicked,className}) {
  const clickMsg = (id) =>{
    onCircleClicked(id)
  }  
  return (
    <div onClick={() => clickMsg(id)} className={`gamecircle ${className}`}>
        {children}
    </div>
  )
}
