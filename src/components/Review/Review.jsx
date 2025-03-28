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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil nisi laboriosam optio! Sit iste minima ex sequi eligendi, cum dolores qui exercitationem repellat, Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia sunt sed, delectus quaerat quam quod dolore repudiandae neque nobis iusto laudantium ipsam, obcaecati reprehenderit? Sunt accusamus veniam repellat blanditiis laudantium saepe molestias. Doloremque aspernatur tenetur voluptatibus corrupti, harum nesciunt! Commodi suscipit iste soluta enim optio dolorum id quaerat, assumenda non! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste ducimus possimus nobis earum optio recusandae sit enim, ad facilis odio libero id accusantium maiores iure repudiandae nesciunt eveniet quaerat magni itaque sapiente explicabo? Non suscipit itaque exercitationem ea dolorum. Illo soluta eligendi dicta delectus, cumque totam magnam error ad ex.</p>
                </div>
                </div>
             
        </div>
    </div>
  )
}

export default Review