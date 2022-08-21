import React from 'react'
import Project from './Project'
import Styles from "./Projects.module.css"

const Projects = () => {
  const telemedicine = "Telemedicine for Babycare is a mobile application that facilitates communication between physicians and patients by allowing patients to connect to physicians from the comfort of their own home via video call and text chat. It also provides an intelligent chatbot that communicates with patients."
  return (
    <div className={Styles.Projects}>
      <h1>MY PREVIOUS PROJECTS I WORKED ON</h1>
      <div className={Styles.ListOfProjects}>
        <Project
          image = "telemedicine"
          name = "Telemedicine Mobile Application For Babycare"
          techUsed = "REACTJS NODEJS MONGODB EXPRESS SOCKET.IO FLUTTER "
          description = {telemedicine}
        />
        <Project
          image = "burger"
          name = "Burger Builder App"
          techUsed = "RAECTJS REDUX"
          description = "Burger builder application is website that i developed with react js and it is an applcation that allows a customer to choose and order a burger with any type of ingridient they want"
        />
      </div>
      <div className={Styles.ListOfProjects}>
        <Project
          image = "elp"
          name = "Registration System For Ethiopian Electric Power Corporation Of Jimma Discrict"
          techUsed = "PHP HTML5 CSS3 JAVASCRIPT MYSQL "
          description = "I have developed website for Ethiopian Electric Power Corporation of Jimma Discrict which allow them to register there customers"
        />
        <Project
          image = "myplace"
          name = "My place Mobile Application"
          techUsed = "FLUTTER EXPRESS NODEJS MONGODB "
          description = "My place mobile application is an application like social media which permit users to share most attractive place around them."
        />
      </div>
    </div>
  )
}

export default Projects
