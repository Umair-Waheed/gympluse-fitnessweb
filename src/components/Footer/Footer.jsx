import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo1.png"
import phoneLogo from  "../../assets/phone.png"
import mailLogo from  "../../assets/mail.png"
import locationLogo from  "../../assets/location.png"
import facebookLogo from  "../../assets/facebook1.png"
import xthread from  "../../assets/x-thread.png"
import instaLogo from  "../../assets/instagram1.png"
const Footer = () => {
  return (
    <div className='footer bg-black text-white pl-20 pr-20 '>
      <div className="footer-container">

        <div className="footer-logo ">
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia suscipit repellendus ipsam, qui, illum odio obcaecati eius ducimus reprehenderit nemo aliquid, architecto deleniti nihil vel similique quos non earum voluptas.</p>
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
              <img src={phoneLogo} alt="" />
              <p>+032 5465 8790</p>
            </li>
            <li>
              <img src={mailLogo} alt="" />
              <p>gympulse@gmail.com</p>
            </li>
            <li>
              <img src={locationLogo} alt="" />
              <p>27 The Avenue London</p>
            </li>
          </ul>
        </div>

        <div className="follow-us">
          <h2 className='text-xl bold mb-2 mt-5 text-[red]'>Social Handles</h2>
          <div className='socialhandles'>
          <img src={facebookLogo} alt="" />
          <img src={xthread} alt="" />
          <img src={instaLogo} alt="" />
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