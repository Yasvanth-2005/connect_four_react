import React from 'react'

export default function Header({player}) {
  return (
    <div className='panel header'>
        <div className='header-text'>Player {player} Turn</div>
    </div>
  )
}
