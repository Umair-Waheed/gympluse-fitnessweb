import React from 'react'
import "./AboutUs.css"
import Benefit from '../../components/Benefits/Benefit'
const AboutUs = ({aboutRef}) => {
  return (
    <div ref={aboutRef} className=' h-[110vh] w-100% bg-[#2A2C31] text-white pl-20 pr-20 '>
    <div className="about">
       <h1 className='about-h1 text-center'>About Us</h1>

       <div className="why-choose-section">
          <div className="why-choose-us">
            <h2>Why Choose Us?</h2>
            <br />
            <p>At <span className='text-[red]'>GYM PULSE</span>, we offer expert trainers, modern equipment, and a supportive community that’s committed to your success. With flexible membership plans and a clean, safe environment, we make it easy for you to focus on achieving your fitness goals. Join us and experience results-driven programs tailored just for you!

            </p>
           </div>

           <div className="milestones-section">
            <h2>MileStones Achieved!</h2>
            <span className='milestone '>
            <p>BodyBuilding</p>
            <p>90%</p>
            </span>
            <div className='outerbar'>
                <div className='innerbar w-[90%]'>
                </div>
            </div>

            <span className='milestone'>
            <p>WeightLifting</p>
            <p>75%</p>
            </span>
            <div className='outerbar'>
                <div className='innerbar w-[75%]'>
                </div>
            </div>

            <span className='milestone'>
            <p>Training</p>
            <p>80%</p>
            </span>
            <div className='outerbar'>
                <div className='innerbar w-[80%]'>
                </div>
            </div>
            

           </div>
       </div>

      <Benefit/>
       </div>
        
        
    </div>
  )
}

export default AboutUs