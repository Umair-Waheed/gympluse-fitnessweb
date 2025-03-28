import React from 'react'
import "./Navbar.css"
import { assets } from '../../assets/assets.js';
const Navbar = ({scrollToSection, refs}) => {
  const { homeRef, aboutRef, servicesRef,trainerRef,shopRef } = refs;
//   const nav = document.querySelector('navbar');
// window.onscroll = function () { 
//     if (document.body.scrollTop >= 500 ) {
//       nav.classList.add("nav-colored");
//     } 
//     else {
//       nav.classList.remove("nav-colored");
//     }
// };
  return (
    <div className='navbar absolute z-10 top-0 right-0 left-0 pl-20 pr-20 '>
        <div className=" flex items-center justify-between h-full">

            {/* logo */}
            <img className='h-24' src={assets.logo} alt="" />

            {/* middlebar */}
            <div className=" flex items-center list-none ">
               
                <li className='nav-option mr-5 active'><a onClick={()=>scrollToSection(homeRef)} href="#home" >Home</a></li>
                <li className='nav-option mr-5'><a onClick={()=>scrollToSection(aboutRef)} href="#aboutus" >About Us</a></li>
                <li className='nav-option mr-5'><a onClick={()=>scrollToSection(servicesRef)} href="#services" >Services</a></li>
                <li className='nav-option mr-5'><a onClick={()=>scrollToSection(trainerRef)} href="#trainer">Trainer</a></li>
                <li className='nav-option mr-5'><a onClick={()=>scrollToSection(shopRef)} href="#shop">Shop</a></li>
                <div className='nav-option flex items-center'>
                    <a href="#pages" >Pages</a>
                    {/* dropdown */}
                    <ul className='dropdown ml-[-10%] hidden '>
                        <li><a href="/Bmi-Calculate"></a>Bmi Calculate </li>
                        <li><a href="/Calories-Calculate"></a>Calories Calculate</li>
                        <li><a href="/Gallery"></a>Gallery</li>
                       
                    </ul>    
                    </div>
                
            
    
    </div>
            <button className="btn">Join Us</button>
        </div>
    </div>
  )
}

export default Navbar