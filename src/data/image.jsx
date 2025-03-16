import React from 'react'
import Home from '../pages/Home/Home'

const image = () => {
    const images=[
        {
            img1:"https://i.pinimg.com/736x/1b/a3/89/1ba389706684f84900f7cb4665508dab.jpg"
        },
        {
            img2:"https://i.pinimg.com/originals/48/67/52/4867525338e2c853081e0eec381df456.jpg"
        },
        {
            img3:"https://t4.ftcdn.net/jpg/06/31/52/63/360_F_631526348_iyXBhrHcirGz44bTZejMB1IVAjmdUp92.jpg"
        }
    ]
  return(

  <div style={{
    maxWidth:"1200px",
    width:"100%",
    height:"500px",
    margin:"0 auto",
  }}>
<Home imgUrl={"https://t4.ftcdn.net/jpg/06/31/52/63/360_F_631526348_iyXBhrHcirGz44bTZejMB1IVAjmdUp92.jpg"}/>
  </div>
  )
}

export default image