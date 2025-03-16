import React from 'react'
import { useState,useRef } from 'react';
import "./Home.css"
import HeroSection from '../../components/HeroSection/HeroSection';
import Navbar from '../../components/Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import Program from '../Programs/Program';
import OurClasses from '../OurClasses/OurClasses';
import PricePlan from '../../components/PricePlan/PricePlan';
import Trainer from '../Trainer/Trainer';
import Shop from '../Shop/Shop';
import Feedback from '../Feedback/Feedback';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const trainerRef = useRef(null);
  const shopRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  
  return ( 
    <>
    <div className='h-[100vh] w-100%'>
      <Navbar scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef }} />
      <HeroSection ref={homeRef}/>
      <AboutUs aboutRef={aboutRef}/>
      <Program servicesRef={servicesRef} />
      <OurClasses/>
      <PricePlan/>
      <Trainer trainerRef={trainerRef} />
      <Shop shopRef={shopRef} />
      <Feedback/>
      <Footer/>
  </div>
  </>
  
  )


}

export default Home