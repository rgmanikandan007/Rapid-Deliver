import React from 'react'
import BannerImg from '../Images/banner.jpg'
import subBanner1 from '../Images/sub-banner (1).jpg'
import subBanner2 from '../Images/sub-banner (2).jpg'
import subBanner3 from '../Images/sub-banner (3).jpg'

function Banner() {
  return (
    <>
      <div className='banner-container'>
        <img src={BannerImg} alt='Banner-img' />
      </div>

      <div className='sub-banner'>
        <img src={subBanner1} />
        <img src={subBanner2} />
        <img src={subBanner3} />
      </div>
    </>
  )
}

export default Banner