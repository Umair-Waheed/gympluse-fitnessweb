import React from 'react'
import "./Product.css"
const Product = ({img,proName,price,desc}) => {
  return (
    <>
    <div className="product-card">
    <img src={img} alt="product Image"/>
    <div className="name-price">
    <h2>{proName}</h2>
    <p>{price}</p>
    </div>
    <div className="product-content">
        <p>{desc}</p>
        <button className='mt-1'>Buy now</button>
       

    </div>
</div>
</>
  )
}

export default Product