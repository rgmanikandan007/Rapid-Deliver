import React from 'react'
import freshVegetable from '../Images/VegFruitesSide/vegfruitsideimg (10).png'
import freshFruit from '../Images/VegFruitesSide/vegfruitsideimg (3).png'
import mangoseMelons from '../Images/VegFruitesSide/vegfruitsideimg (15).png'
import seasonal from '../Images/VegFruitesSide/vegfruitsideimg (11).png'
import comporeciepe from '../Images/VegFruitesSide/vegfruitsideimg (8).jpg'

const Vegfruits = () => {
    return (
        <>
            <div className='vegfruits-container'>
                <div className='left-vegfruits'>
                    <div className='side-products'>
                        <img src={freshVegetable} />
                        <h4>Fresh Vegetables</h4>
                    </div>
                    <div className='side-products'>
                        <img src={freshFruit} />
                        <h4>Fresh Fruits</h4>
                    </div>
                    <div className='side-products'>
                        <img src={mangoseMelons} />
                        <h4>Mangose & Melones</h4>
                    </div>
                    <div className='side-products'>
                        <img src={seasonal} />
                        <h4>Seasonal</h4>
                    </div>
                    <div className='side-products'>
                        <img src={comporeciepe} />
                        <h4>Compo Reciepe</h4>
                    </div>
                </div>
                <div className='right-vegfruits'></div>
            </div>
        </>
    )
}

export default Vegfruits