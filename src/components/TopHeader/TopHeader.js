import React from 'react'
import CoverPhoto from '../../assets/images/hirpha.jpg'
import Profile from '../../assets/images/h.JPG'
import Styles from "./TopHeader.module.css"
const TopHeader = () => {
  return (
    <div className={Styles.TopHeader}>
     <div className={Styles.TopHeaderLeft}>
      <img src={Profile} className= {Styles.Profile} alt = "Profile"></img>
      <h1>Hirpha Fayisa</h1>
      <p> I have recently graduated from Jimma University by Software
Engineering. I am a talented, ambitious, and hardworking
individual, with broad skills and experience in web
development with ReactJS for the frontend part and NodeJS
for the backend part, and mobile application development
with the Flutter framework. I am a person who likes to make a
good impact on people around me.
<br/>
<br/>

I believe there is always something to learn, 
and with emerging technology's rapid pace, there's 
always something new! I enjoy collaborating with others 
(either in person or virtually) to share knowledge and ideas. 
<br/>
<br/>
Technical proficiencies i used includes: 

<p><strong>Programming Languages:Java, C++, JavaScript, HTML, CSS, ReactJs, Flutter, NodeJs, mongoDB</strong> </p> 
<p><strong>Tools: Netbeans IDE, Android Studio, Visual Studio Code</strong></p>
        </p>
     </div>
     <img src={CoverPhoto}className ={Styles.CoverPhoto} alt = "hirpha"></img>
    </div>
  )
}

export default TopHeader
