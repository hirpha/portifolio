import React from 'react'
import Styles from './MainBody.module.css'

const MyJob = (props) => {
  return (
    <div className={Styles.MyJob}>
        <div className={Styles.Header}>
         <div className={Styles.Dot}></div>
         <h1>{props.title}</h1>
        </div>
      
      <p>{props.body}</p>
      <h3 className={Styles.Tech}>{props.usedTech}</h3>
    </div>
  )
}

export default MyJob
