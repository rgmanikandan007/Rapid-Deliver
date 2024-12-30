import React from 'react'
import Navlogo from '../Images/Navlogo-copy.jpg'
import { MdAddShoppingCart } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='top-navbar'>
        <div className='navlogo'>
          <img src={Navlogo} />     
        </div>  

        <div className='deliver-time'>
          <h3>Delivery time in 9 minutes</h3>
          <h4>Tenkasi, Tamilnadu, India</h4>
        </div>

        <div className='search-box'>
          <input type='text' placeholder='Search Product...' />
        </div>

        <div className='Addcart-icon'>
          <h2><TbLogin2 /></h2> 
          <h2><MdAddShoppingCart /></h2>
        </div>
      </div>

      <div className='bottom-nav'>
        <div className='nav-links'>
          <ul>
            <li><a href='#'>Vegetables</a></li>
            <li><a href='#'>Fruits</a></li>
            <li><a href='#'>Dairy & Breakfast</a></li>
            <li><a href='#'>Masala & Oil</a></li>
            <li><a href='#'>Atta & Rice</a></li>
            <li><a href='#'>Snack's</a></li>
            <li><a href='#'>Juieces</a></li>
            <li><a href='#'>Tea & Coffee</a></li>
            <li><a href='#'>Book's</a></li>
            <li><a href='#'>Toys & Games</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar