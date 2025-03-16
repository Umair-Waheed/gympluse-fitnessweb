import React from 'react'
import "./Benefit.css"
import icon1 from "../../assets/gymmachine.png"
import icon2 from "../../assets/nutritionplan.png"
import icon3 from "../../assets/shopicon.png"
import icon4 from "../../assets/proftraining.png"
const Benefit = () => {
  return (
    <div className='benefit-container'>
        <h1>Benefits</h1>
        <div className="cards-container">
        <div className='card'>
            <div className="logo">
        <img src={icon1} alt="" />
            </div>
            <div className="card-body">
                <h2>Advanced Equipments</h2>
                <p>Experience your best workout with our cutting-edge fitness equipment designed for maximum efficiency</p>
            </div>

        </div>
        <div className='card'>
            <div className="logo">
        <img src={icon2} alt="" />
            </div>
            <div className="card-body">
                <h2>Best Nutrition Plan</h2>
                <p>Fuel your body right with our expert-designed nutrition plans tailored for optimal performance and health</p>
            </div>

        </div>
        <div className='card'>
            <div className="logo">
        <img src={icon4} alt="" />
            </div>
            <div className="card-body">
                <h2>Professional Training Plan</h2>
                <p>Achieve your fitness goals with personalized training programs led by our certified professionals</p>
            </div>

        </div>
        <div className='card'>
            <div className="logo">
        <img src={icon3} alt="" />
            </div>
            <div className="card-body">
                <h2>Our Shop</h2>
                <p>Enjoy exclusive discounts on fitness gear and supplements at our shop, available only to members!</p>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Benefit