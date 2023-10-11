import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/31/Events/img23/Jupiter23/Homepage/PC_HERO_NTA_Day-1_2X_EN._CB575872412_.jpg' alt=""/>
        </div>

        <div className='home_row'>
            <Product title='The lean startup' price={29.99} image='https://m.media-amazon.com/images/I/41TjLWvZpkL._SY445_SX342_.jpg' rating={5} />
            <Product />
        </div>
        
        <div className='home_row'>
            {/* Product */}
            {/* Product */}
            {/* Product */}
        </div>

        <div className='home_row'>
            {/* Product */}
        </div>
    </div>
  )
}

export default Home