import React from 'react'
import "./Shop.css"
import {assets} from "../../assets/assets.js"
import Product from '../../components/Products/Product'
const Shop = ({shopRef}) => {
  return (
    <div ref={shopRef} className='shop bg-black text-white pl-20 pr-20'>
       <h1>Pulse Shop(Our GYM Products)</h1>
       <p>Explore our gym shop for premium fitness essentials to support every workout.</p>
      <div className="shop-container">
       <div className='shops-product'> <Product img={assets.wheyprotien} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={assets.penutbutter} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={assets.waterbottle} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={assets.shoes} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={assets.headphone} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={assets.gloves} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       
       
      </div>
      <div  className="shop-btn">
      <button>View all products</button>
      </div>
    </div>
  )
}

export default Shop