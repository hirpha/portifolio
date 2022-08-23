import React from 'react'
import Profile from '../../assets/images/h.JPG'
import Styles from './MainBody.module.css'

const AboutMe = () => {
  return (
    <div className={Styles.AboutMe}>
      <img 
        className={Styles.Profile}
        src={Profile} 
        alt= "profile"/>
      <div className={Styles.AboutMeBody}>
        <h2>Hirpha Fayisa</h2>
        <p>Mobile application developer / Website Developer</p>
      </div>
    </div>
  )
}

export default AboutMe
