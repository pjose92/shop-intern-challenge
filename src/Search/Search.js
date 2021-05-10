import React from "react"
import "./Search.css"
import Icon from "../Search/shopifyIcon.png"

import "bootstrap/dist/css/bootstrap.min.css"

const search = props => {
  return (
    <div className="search-section">
      <p className='toplogo'> <img src={Icon} className="app-logo" height="50px" width="auto" alt="logo" /></p>
      <p className = "title">Movie awards for entrepreneurs </p>
      <input placeholder= " Harry Potter, Enter at Least 3 letters"  className="userinput"
      onChange = {props.input}></input>
    </div>
  )
}

export default search

