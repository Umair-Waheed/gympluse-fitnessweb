import React from 'react'
import "./OurClasses.css"
import deadliftImg from "../../assets/deadlift.png"
import cardio from "../../assets/cardio.jpg"
import platesimage from "../../assets/Pilates.jpg"
import strength from "../../assets/strength.jpg"
import crosfit from "../../assets/Crosfit.jpg"
import yoga from "../../assets/yogaimage.jpg"
import hightintense from "../../assets/high-intensity-workout.jpg"
import arrow from "../../assets/right-arrow.png"
const OurClasses = () => {
  return (
    <div className='bg-[#2A2C31] text-white pl-20 pr-20'>
        <div className="classes-section">
            <div className="classes-header">
                <h1>Our Classes</h1>
                <p>Services We Offer</p>
            </div>

            <div className="classes">

                {/* 1st */}
    <div class="class">
        <img src={cardio} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>Cardio</h3>
            <h1 className='text-2xl '>Aerobic exercise</h1>

            <p class="class-description">Cardio, or cardiovascular exercise, is any activity that raises your heart rate and increases blood circulation. It helps improve stamina, burn calories, and enhance heart and lung health.</p>
            <div className='read-btn'>
                         <p>Read More </p> 
                         <img src={arrow} alt="" />

                    </div>
        </div>
    </div>

                 {/* 2nd */}
                 <div class="class">
        <img src={hightintense} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>High-Intensity Interval Training</h3>
            <h1 className='text-2xl '>Bootcamp</h1>

            <p class="class-description"> High-Intensity Interval Training (HIIT) involves short bursts of intense exercise followed by brief rest periods, maximizing calorie burn and improving cardiovascular fitness in a short amount of time.</p>
            <div className='read-btn'>
                         <p>Read More </p> 
                         <img src={arrow} alt="" />

                    </div>
        </div>
    </div>

                 {/* third */}
                 <div class="class">
        <img src={platesimage} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>Pilates</h3>
            <h1 className='text-2xl '>Flexibility Exercise</h1>

            <p class="class-description">Strengthen your core, improve flexibility, and enhance overall body balance through low-impact exercises. Pilates promotes better posture and body awareness while building lean muscle.</p>
            <div className='read-btn'>
                         <p>Read More </p> 
                         <img src={arrow} alt="" />

                    </div>
        </div>
    </div>

                 {/* fourth */}
                 <div class="class">
        <img src={strength} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>Strength</h3>
            <h1 className='text-2xl '>Strength Training</h1>

            <p class="class-description">Strength training focuses on building muscle power and endurance through resistance exercises. It helps improve muscle tone, increase metabolism, and enhance overall body strength.</p>
            <div className='read-btn'>
                         <p>Read More </p> 
                         <img src={arrow} alt="" />

                    </div>
        </div>
    </div>

                 {/* fifth */}
                 <div class="class">
        <img src={crosfit} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>CrossFit</h3>
            <h1 className='text-2xl '>Strength Training</h1>

            <p class="class-description">
            CrossFit is a high-intensity workout combining strength, endurance, and functional movements. It focuses on constantly varied exercises to improve power, agility, and stamina.</p>
            <div className='read-btn'>
                         <p>Read More </p> 
                         <img src={arrow} alt="" />

                    </div>
        </div>
    </div>

                 {/* sixth */}
                 <div class="class">
        <img src={yoga} alt="class Image" class="class-image"/>
        <div class="class-content">
            <h3 className='text-xl font-bold'>Yoga</h3>
            <h1 className='text-2xl '>Mind-Body Exercises</h1>

            <p class="class-description">Yoga combines mindful movement and breathing techniques to enhance flexibility, balance, and mental clarity. It's a restorative practice that nurtures both body and mind.</p>
            <div className='read-btn'>
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

export default OurClasses