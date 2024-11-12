import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./navBar.css"

const NavBar = ( { count } ) => {
  return (
    <div className='flex'>
        <h2>
        Press R3D
        </h2>
        <CartWidget count = {count}/>
        </div>
  )
}

export default NavBar