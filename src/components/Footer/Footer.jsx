import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets.js'
const Footer = () => {
  return (
    <div className='footer bg-black text-white pl-20 pr-20 '>
      <div className="footer-container">

        <div className="footer-logo ">
          <img src={assets.logo} alt="" />
          <p>GymPulse offers expert-led fitness programs, certified coaches, and an integrated store to explore and shop quality gym equipment all in one place.</p>
        </div>

        <div className="details">
          <h2 className='text-xl bold mb-2 text-[red]'>Details</h2>
          <ul>
            <li>Trainers</li>
            <li>Tranings</li>
            <li>Prices Plan</li>
            <li>Shop</li>
            <li>Reviews</li>
          </ul>
        </div>

        <div className="contact-us">
        <div className="contacts">
          <h2  className='text-xl bold mb-2 text-[red]'>Contacts</h2>
          <ul>
            <li>
              <img src={assets.phoneLogo} alt="" />
              <p>+92 3454658790</p>
            </li>
            <li>
              <img src={assets.mailLogo} alt="" />
              <p>gympulse@gmail.com</p>
            </li>
            <li>
              <img src={assets.locationLogo} alt="" />
              <p>27 The Avenue London</p>
            </li>
          </ul>
        </div>

        <div className="follow-us">
          <h2 className='text-xl bold mb-2 mt-5 text-[red]'>Social Handles</h2>
          <div className='socialhandles'>
          <img src={assets.facebookLogo} alt="" />
          <img src={assets.xthread} alt="" />
          <img src={assets.instaLogo} alt="" />
          </div>
        </div>

        </div>
      </div>

        <hr className='mt-5 mb-5 border-[#2a2c31d3]' />
      
        <div className="copyright pb-3 text-center text-sm">
          <p>&copy; 2023 <span className='text-[red]'>Gympulse</span> | All rights reserved</p>
        </div>
    </div>
  )
}

export default Footer
