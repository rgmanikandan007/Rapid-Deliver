import React from 'react'
import BannerImg from '../Images/banner.jpg'

function Banner() {
  return (
    <div className='banner-container'>
        <img src={BannerImg} alt='Banner-img'/>
    </div>
  )
}

export default Banner