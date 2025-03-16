import React from 'react'
import { useState } from 'react';
import "./HeroSection.css"

const HeroSection = ({ref}) => {
  
    const images=[
        // "https://i.pinimg.com/originals/48/67/52/4867525338e2c853081e0eec381df456.jpg",
        "https://i.pinimg.com/736x/1b/a3/89/1ba389706684f84900f7cb4665508dab.jpg",
        // "https://t4.ftcdn.net/jpg/06/31/52/63/360_F_631526348_iyXBhrHcirGz44bTZejMB1IVAjmdUp92.jpg"
      ];
      const [image,setImage]=useState(images);
  return (
    <div ref={ref} className="hero-section ">
    <div className='image-slider'>
    {image.map((img,index)=>{
        return(
            <img  className='image' src={img} key={index}/>)})}
            
  </div>
  <div className='home-quote pl-24'>
    <div className='quote'>
       <h1 ><span className='quote-word' >Stop</span> <span className='grey-quote' >Wishing</span> <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className='grey-quote'>Start</span> <span className='quote-word's>Doing</span></h1>

    </div>
    <br />
    <div className="description">
          <p className='quote-desc'>Transform your fitness journey by turning dreams into action. It's time to stop wishing and start achieving your goals.</p>  
    </div>
    <br />
    <button className='start-btn'>Start Now</button>
    <br /><br /><br />

    <div className='memberships'>
      <div className="joined">
          <h2>956</h2>
          <p>Member Joined</p>
      </div>
      <div className='expert'>
          <h2>90+</h2>
          <p>Expert Trainers</p>
      </div>
      <div className="fit-program">
          <h2>85+</h2>
          <p>Fitness Programs</p>
      </div>

    </div>
    


  </div>
     
      
  </div>
  
  )
}

export default HeroSection