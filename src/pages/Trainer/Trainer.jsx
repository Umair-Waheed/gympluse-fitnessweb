import React from 'react'
import "./Trainer.css"
import mantrainer1 from "../../assets/mantrainer1.jpg"
import mantrainer2 from "../../assets/mantrainer2.0.jpg"
import mantrainer3 from "../../assets/mantrainer3.jpg"
import mantrainer4 from "../../assets/mantrainer4.jpg"
import girltrainer from "../../assets/girltrainer.jpg"
import girltrainer2 from "../../assets/girltrainer2.jpg"

const Trainer = ({trainerRef}) => {
  return (
    <div ref={trainerRef} className='trainer bg-[#2A2C31] text-white pl-20 pr-20'>
        <h1>Expert Trainers</h1>
        <p>Train yourself with our best trainers</p>
        <div className="trainer-container mt-10">

            {/* firstcard */}
        <div className="trainer-card">
    <img src={mantrainer1} alt="Card Image"/>
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
    <img src={girltrainer} alt="Card Image"/>
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
    <img src={mantrainer2} alt="Card Image"/>
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
    <img src={mantrainer3} alt="Card Image"/>
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
    <img src={girltrainer2} alt="Card Image"/>
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
    <img src={mantrainer4} alt="Card Image"/>
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