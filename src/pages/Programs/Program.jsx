import React from 'react'
import "./Program.css"
import icon1 from "../../assets/bodybuilding (1).png"
import icon2 from "../../assets/strengthicon.png"
import icon3 from "../../assets/yoga.png"
import icon4 from "../../assets/training.png"
import arrow from "../../assets/right-arrow.png"
const Program = ({servicesRef}) => {
  return (
    <div ref={servicesRef} className='h-[85vh] bg-black text-white pl-20 pr-20'>
      <div className="section">
        <div className="section-header">
          <h1>Best Trainings We Offers</h1>
          <p>Discover a wide range of training programs meet to your fitness goals <br />from strength and endurance  to flexibility and conditioning all led by expert trainers.</p>
       </div>
       <div className="programs">
        <div className="program">
          <img src={icon1} alt="" />
          <div className="program-body">
            <h2>Body Building</h2>
            <p>Achieve your ideal physique with our specialized bodybuilding programs, tailored to push your limits.</p>
            <div className='read-more'>
            <p>Read More </p> 
            <img src={arrow} alt="" />

            </div>
            
          </div>
        </div>

        <div className="program bg-[red]" >
          <img src={icon2} alt="" />
          <div className="program-body">
            <h2>Strength Training</h2>
            <p>Boost your power and endurance with progressive weightlifting and resistance exercises.</p>
            <div className='read-more'>
            <p>Read More </p> 
            <img src={arrow} alt="" />

            </div>
            
          </div>
        </div>

        <div className="program">
          <img src={icon3} alt="" />
          <div className="program-body">
            <h2>Yoga</h2>
            <p>Enhance flexibility, balance, and mindfulness through a series of restorative and dynamic poses.</p>
            <div className='read-more'>
            <p>Read More </p> 
            <img src={arrow} alt="" />

            </div>
            
          </div>
        </div>

        <div className="program">
          <img src={icon4} alt="" />
          <div className="program-body">
            <h2>Personal Training</h2>
            <p>Achieve personalized fitness goals with one-on-one guidance from certified trainers.</p>
            <div className='read-more'>
            <p>Read More </p> 
            <img src={arrow} alt="" />

            </div>
            
          </div>
        </div>
        

       </div>

     </div>
    </div>
  )
}

export default Program