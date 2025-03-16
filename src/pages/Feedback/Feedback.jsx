import React,{ useRef } from 'react'
import "./Feedback.css"
import Review from '../../components/Review/Review'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Newsletter from '../../components/Newsletter/Newsletter';
const Feedback = () => {
  const feedbackContainerRef = useRef(null);

  const scrollLeft = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({
        left: -feedbackContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (feedbackContainerRef.current) {
      feedbackContainerRef.current.scrollBy({
        left: feedbackContainerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className='Feedback bg-[#2A2C31] text-white pl-20 pr-20'>
        <h1>Our Client Feedbacks</h1>

        <div className="arrow-buttons">
        <button onClick={scrollLeft}><FaArrowLeft /></button>
        <button onClick={scrollRight}><FaArrowRight /></button>
      </div>

        <div className="Feedback-container" ref={feedbackContainerRef}>
            <div className='person-feedback'><Review/></div>
            <div className='person-feedback'><Review/></div>
            <div className='person-feedback'><Review/></div>
           
        </div>
      <div className="newsletter">
      <Newsletter/>
      </div>
      
    </div>
  )
}

export default Feedback 