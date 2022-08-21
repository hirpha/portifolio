import React from 'react'
import Styles from './Contact.module.css'
import FacebookImage from '../../assets/images/facebok.png'
import GithubImage from '../../assets/images/github.png'
import LinkedinImage from '../../assets/images/linkedin.png'
const Contact = () => {
  return (
    <div className={Styles.Contact}>
      <h2>CONTACT ME</h2>
      <p>+251930605974</p>
      <p>hirphafayisa88@gmail.com</p>
      <ul>
        <li>
        <img src={LinkedinImage} alt = "linkenin"/>
            <a href='https://www.linkedin.com/in/hirpha-fayisa-072051186/'>
            linkedin</a></li>
        <li>
        <img src={GithubImage} alt = "github"/>
            <a href='https://github.com/hirpha'>
           github</a></li>
        <li>
        <img src={FacebookImage} alt= "facebook"/>
            <a href='https://www.facebook.com/hirpa.feyisa.5/'>
            facebook</a></li>
      </ul>
    </div>
  )
}

export default Contact
