import React, { useState } from 'react'
import "./PricePlan.css"
import {assets} from "../../assets/assets.js"
const PricePlan = () => {
    const[isHoverd,setIsHovered]=useState(false);
  return (
   <div className='priceplan h-[110vh] pl-20 pr-20 bg-black'>
    <div className="priceplan-header">
        <h1>Our Plan</h1>
        <p>Choose your Membership</p>
    </div>
    <div className='priceplan-container '>
                    {/* first plan card */}
        <div className='first-plan-card plan-card' onMouseEnter={()=>setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className="plan-card-header">
                <h3 className='text-sm opacity-95'>START</h3>
                <h1 className='text-2xl font-semibold'>Rs.1000<span className='text-sm'>/Per Month</span></h1>
            </div>
            <hr className='h-[0px] ml-6 mr-6'/>
            

            <div className="accessibilities">
                <div className="access  ">
                    <img src={assets.tick} alt="" />
                    <p>Perfect for Beginners</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Free Basic Fitness Classes</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Locker Room Access</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>No Time Restriction</p>
                </div>
                

            </div>            
            <p className='plan-btn' >Choose Plan</p>

        </div>

                    {/* second plan */}


                    <div className={`second-plan-card ${isHoverd? "hover-effect":""} plan-card`}
                    >
            <div className="plan-card-header">
                <h3 className='text-sm opacity-95'>INTERMEDIATE</h3>
                <h1 className='text-2xl font-semibold'>Rs.2500<span className='text-sm'>/Per Month</span></h1>
            </div>
            <hr className='ml-6 mr-6'/>
            

            <div className="accessibilities">
                <div className="access  ">
                    <img src={assets.tick} alt="" />
                    <p>Include Basic Package Benefits</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Monthly Fitness Assessment</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Personalized Training</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Access To Advanced Equipments</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>No Time Restriction</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Our Shop Discounts</p>
                </div>

            </div>
       
            <p className='plan-btn' >Choose Plan</p>
            
            
        </div>

                    {/* third plan */}

        <div className='third-plan-card plan-card'
        onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
            <div className="plan-card-header">
                <h3 className='text-sm opacity-95'>PRO</h3>
                <h1 className='text-2xl font-semibold'>Rs.5000<span className='text-sm'>/Per Month</span></h1>
            </div>
            <hr className='ml-6 mr-6'/>
            

            <div className="accessibilities">
                <div className="access  ">
                    <img src={assets.tick} alt="" />
                    <p>Perfect for BodyBuilding</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Special Neutrition Consultation</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Locker & Shower Room Access</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>Daily Health CheckUp</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>VIP Services</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>No Time Restriction</p>
                </div>

                <div className="access">
                <img src={assets.tick} alt="" />
                <p>More Discounts In Our Shop</p>
                </div>

            </div>
                
            <p className='plan-btn' >Choose Plan</p>
            
            
        </div>            

        <div>

        </div>
    </div>


   </div>
  )
}

export default PricePlan