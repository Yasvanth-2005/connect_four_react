import React from 'react'

const clickMsg = (id) =>{
  alert("You clicked "+ id);
}

export default function GameCircle({id,children}) {
  return (
    <div onClick={() => clickMsg(id)}>
        {children}
    </div>
  )
}
