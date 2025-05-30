import React from 'react'
import "./Review.css"
import { assets } from '../../assets/assets.js'


const Review = () => {
  return (
    <div className='review-container'>
        <img className='review-person-img' src={assets.review1} alt="" />
        <div className="review-content-container">
            <div className='review-content-container-btn'>
                <button>Submit Your Feedback</button>
            </div>
        <div className="review-text-container">
            <div className="person-review">
            <h2>@jhon</h2>
            <img src={assets.reviewStar} alt="" />
            </div>
                <div className="person-review-text">
                <p>GymPulse has completely transformed my fitness routine! The variety of programs, expert coaches, and the convenience of browsing gym equipment all in one place make it my go-to fitness platform.</p>
                </div>
                </div>
             
        </div>
    </div>
  )
}

export default Review
