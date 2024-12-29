import React from 'react'
import Navlogo from '../Images/Navlogo-copy.jpg'
import { MdAddShoppingCart } from "react-icons/md";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='top-navbar'>
        <div className='navlogo'>
          <img src={Navlogo} />
        </div>

        <div className='search-box'>
          <input type='text' placeholder='Search Product' />
        </div>

        <div className='Addcart-icon'>
          <h2><MdAddShoppingCart /></h2>
        </div>
      </div>
    </div>
  )
}

export default Navbar