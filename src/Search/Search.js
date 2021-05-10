import React from "react"
import "./Search.css"
import "bootstrap/dist/css/bootstrap.min.css"

const search = props => {
  return (
    <div className = "search-section">
      <p className = 'toplogo'> The Shoppies</p>
      <p className = "title">Movie awards for entrepreneurs </p>
      <input placeholder = " Harry Potter, Enter at Least 3 letters"  className="userinput"
      onChange = {props.input}></input>
    </div>
  )
}

export default search

