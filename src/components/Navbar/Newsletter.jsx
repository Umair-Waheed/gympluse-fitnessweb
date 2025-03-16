import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
  return (
    <div class="subscribe-container">
  <h2>Subscribe To Receive Fitness Tips Weekly Content!</h2>
  <p>Clearly communicate the benefits of subscribing, such as exclusive content and breaking news.</p>
  <div class="input-container">
    <input type="email" placeholder="Enter your email" />
    <button>Subscribe</button>
  </div>
</div>
  )
}

export default Newsletter