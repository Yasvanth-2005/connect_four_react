import React from 'react'

const clickMsg = (id) =>{
  alert("You clicked "+ id);
}

export default function GameCircle({id,color,children}) {
  const style = {
    backgroundColor : color,
    width:100,
    height:100,
    borderRadius:'50%',
    margin:10
  }
  return (
    <div style={style} onClick={() => clickMsg(id)}>
        {children}
    </div>
  )
}
