import React from 'react'
import footerImg1 from '../Images/footer-app.png'
import footerImg2 from '../Images/footer-app2.png'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";


function Footer() {
  return (
    <>
      <div className='footer-container'>
        <div className='footer'>
          <div className='footer-left'>
            <div className='footer-left-child'>
              {/* <h3>Useful Links</h3> */}
              <ul>
                <li>About</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Lead</li>
                <li>Value</li>
              </ul>
            </div>
            <div className='footer-left-child'>
              <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>FAQ's</li>
                <li>Security</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='footer-left-child'>
              <ul>
                <li>Partner</li>
                <li>FInanchise</li>
                <li>Seller</li>
                <li>Warehouse</li>
                <li>Deliver</li>
              </ul>
            </div>
          </div>

          <div className='footer-right'>
            <div className='footer-right-child'>
              {/* <h3>Categories</h3> */}
              <ul>
                <li>Vegetables & Fruits</li>
                <li>Cold Drinks & Juices</li>
                <li>Bakery & Biscuits</li>
                <li>Dry Fruits, Masala & Oil</li>
                <li>Paan Corner</li>
                <li>Pharma & Wellness</li>
                <li>Personal Care</li>
                <li>Beauty & Cosmetics</li>
                <li>Toys & Games</li>
              </ul>
            </div>
            <div className='footer-right-child'>
              <ul>
                <li>Dairy & Breakfast</li>
                <li>Instant & Frozen Food</li>
                <li>Sweet Tooth</li>
                <li>Sauces & Spreads</li>
                <li>Organic & Premium</li>
                <li>Cleaning Essentials</li>
                <li>Ice Creams & Frozen Desserts</li>
                <li>Magazines</li>
                <li>Print Store</li>
              </ul>
            </div>
            <div className='footer-right-child'>
              <ul>
                <li>Munchies</li>
                <li>Tea, Coffee & Health Drinks</li>
                <li>Atta, Rice & Dal</li>
                <li>Chicken, Meat & Fish</li>
                <li>Baby Care</li>
                <li>Home & Office</li>
                <li>Pet Care</li>
                <li>Books</li>
                <li>Navratri Specials</li>
              </ul>
            </div>
          </div>
        </div><br/><hr/>

        <div className='copyrigth'>
          <div className='copyright-left'>
            <h4>© Rapid Deliver, 2024-2025</h4>
          </div>
          <div className='copyright-app'>
            <h3>Download App</h3>
            <img src={footerImg1} />
            <img src={footerImg2} />
          </div>
          <div className='copyright-icon'>
            <h2><FaFacebook /></h2>
            <h2><FaTwitter /></h2>
            <h2><FaInstagramSquare /></h2>
            <h2><FaThreads /></h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer