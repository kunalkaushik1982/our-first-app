import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked")
        let newText=text.toUpperCase()
        setText(newText)
    }
    const handleClearClick = ()=>{
        console.log("Clear Text Area")
        let newText=''
        setText(newText)
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)        
    }

  const [text,setText]=useState("")
  return (
      <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">                
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className="conatiner my-3">
               <h2>Your Text Summary</h2> 
               <p> Word Count: {text.split(" ").length} | Character Count: {text.length} | Line Count: {text.split("\n").length}</p>
               <p>{0.008*text.split(" ").length} Minutes read</p>
               <h2>Preview</h2>
               <p>{text}</p>
            </div>
        </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}