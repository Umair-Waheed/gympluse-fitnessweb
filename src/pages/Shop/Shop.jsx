import React from 'react'
import "./Shop.css"
import Product from '../../components/Products/Product'
import wheyprotien from "../../assets/Shop-Item/wheyprotien.jpg"
import penutbutter from "../../assets/Shop-Item/penutbutter.jpg"
import waterbottle from "../../assets/Shop-Item/waterbottle.jpg"
import gloves from "../../assets/Shop-Item/gloves.jpg"
import headphone from "../../assets/Shop-Item/headphones.jpg"
import shoes from "../../assets/Shop-Item/shoes.jpg"
const Shop = ({shopRef}) => {
  return (
    <div ref={shopRef} className='shop bg-black text-white pl-20 pr-20'>
       <h1>Pulse Shop(Our GYM Products)</h1>
       <p>Explore our gym shop for premium fitness essentials to support every workout.</p>
      <div className="shop-container">
       <div className='shops-product'> <Product img={wheyprotien} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={penutbutter} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={waterbottle} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={shoes} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={headphone} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       <div className='shops-product'> <Product img={gloves} proName="Gym Shoes" price="Rs.5000" desc="Ultra Grip" /> </div>
       
       
      </div>
      <div  className="shop-btn">
      <button>View all products</button>
      </div>
    </div>
  )
}

export default Shop