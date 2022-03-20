import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked")
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)        
    }
  const [text,setText]=useState("Enter text here2")
  return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">                
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}