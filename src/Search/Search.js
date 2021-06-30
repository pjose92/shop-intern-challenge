import React from "react"
import "./Search.css"
// import Icon from "../Search/shopifyIcon.png"

import "bootstrap/dist/css/bootstrap.min.css"

const search = props => {
  return (
    <div 
      className="search-section"
    >
      <p 
        className='toplogo'> 
          Movie Awards
          {/* <img src={Icon} 
            className="app-logo" 
            height="50px" width="auto" 
            alt="logo" 
          /> */}
        </p>
      <p className = "title">Movie Awards For Entrepreneurs</p>
      <input 
        placeholder= "Type At Least 3 Letters To See Results" 
        className="userinput"
        onChange = {props.input}>
      </input>
    </div>
  )
}

export default search