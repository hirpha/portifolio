import React from 'react'
import Styles from './Projects.module.css'
import Image from '../../assets/images/profile.jpg'
import myPlace from '../../assets/images/myplace.jpg'
import telemedicine from '../../assets/images/telemedicine.jpg'
import elp from '../../assets/images/elpc.jpg'
import burger from '../../assets/images/burgerlogo.png'

const Project = (props) => {
    let imgUrl = null;
    switch(props.image){
        case "telemedicine":
            imgUrl = telemedicine
        break
        case "burger":
            imgUrl = burger
        break
        case  "myplace":
            imgUrl = myPlace
        break
        case "elp":
            imgUrl = elp
        break
        default:
        imgUrl = null
            break    
        
    }
  return (
    <div className={Styles.Project}>
        <img src = {imgUrl} alt='image'/>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <div className={Styles.TechUsed}>{props.techUsed}</div>
    </div>
  )
}

export default Project
