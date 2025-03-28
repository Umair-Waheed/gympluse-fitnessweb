import React from 'react'
import "./Trainer.css"
import {assets} from "../../assets/assets.js"


const Trainer = ({trainerRef}) => {
  return (
    <div ref={trainerRef} className='trainer bg-[#2A2C31] text-white pl-20 pr-20'>
        <h1>Expert Trainers</h1>
        <p>Train yourself with our best trainers</p>
        <div className="trainer-container mt-10">

            {/* firstcard */}
        <div className="trainer-card">
    <img src={assets.mantrainer1} alt="Card Image"/>
    <h2>Ethan Brooks</h2>
    <div className="trainer-content">
        <p>Personal Nutritional</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>

       

                {/* second-card */}

                <div className="trainer-card">
    <img src={assets.girltrainer} alt="Card Image"/>
    <h2>Sophia Thompson</h2>
    <div className="trainer-content">
        <p>Functional Training & Flexibility</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>


 {/* third card */}

 <div className="trainer-card">
    <img src={assets.mantrainer2} alt="Card Image"/>
    <h2>Jordan</h2>
    <div className="trainer-content">
        <p>BodyBuilding</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>



 {/* four-card */}

 <div className="trainer-card">
    <img src={assets.mantrainer3} alt="Card Image"/>
    <h2>Jake Ross</h2>
    <div className="trainer-content">
        <p>Pilates & Core Fitness</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>


 {/* fifth-card */}

 <div className="trainer-card">
    <img src={assets.girltrainer2} alt="Card Image"/>
    <h2>Emma Lee</h2>
    <div className="trainer-content">
        <p>Yoga & Recovery Training</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>


 {/* sixth-card */}

 <div className="trainer-card">
    <img src={assets.mantrainer4} alt="Card Image"/>
    <h2>Dan Gray</h2>
    <div className="trainer-content">
        <p>Weightlifting & Strength</p>
        <div className="social-icons">
        
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter"/></a>
    <a href="#"><img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instag|ram"/></a>

        </div>

    </div>
</div>


        </div>
    </div>
  )
}

export default Trainer