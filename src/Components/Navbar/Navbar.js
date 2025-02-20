import React from 'react'
import Navlogo from '../Images/Navlogo-copy2.png'
import { MdAddShoppingCart } from "react-icons/md";
import { TbLogin2 } from "react-icons/tb";

import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

function Navbar() {

  return (
    <div className='navbar-container'>
      <div className='top-navbar'>
        <div className='navlogo'>
          <Link to="/"><img src={Navlogo} /></Link>
        </div>

        <div className='deliver-time'>
          <h3>Delivery time in 9 minutes</h3>
          <h4>Tenkasi, Tamilnadu, India</h4>
        </div>

        <div className='search-box'>
          <input type='text' placeholder='Search Product...' />
        </div>

        <div className='Addcart-icon'>
          <Tooltip title="Login" placement="left-start">
            <h2><TbLogin2 /></h2>
          </Tooltip>
          <Tooltip title="Cart" placement="left-start">
            <h2><MdAddShoppingCart /></h2>
          </Tooltip>
        </div>
      </div>



      <div className='bottom-nav'>
        <div className='nav-links'>
          <ul>
            <li><Link to='/vegfruits'>Vegetables & Fruits</Link></li>
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