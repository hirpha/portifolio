import React from 'react'
import AboutMe from './AboutMe'
import MyJob from './MyJob'

const MainBody = () => {
  return (
    <div >
      <AboutMe/>
      <MyJob 
        title = "Website Development"
        usedTech = "HTML5 - CSS3 - REACTJS - NODEJS - PHP - MONGODB"
        body = "I have the best skills in web development with 2 years experience for both backend and front end area. Mostly I was used to HTML5 , CSS3 , php and Javscript for past years. But also I have great skills on the most recent web frameworks with lots of experience working with react ,node js and mongodb."
      />
      <MyJob 
        title = "Mobile Application Development"
        usedTech = "FLUTTER - DART - NODEJS - MONGODB"
        body = "I have also the best skills in world of mobile application development for last 2 years. I have exprience in developing attractive mobile application UI with flutter framework . "
      />
      
    </div>
  )
}

export default MainBody
