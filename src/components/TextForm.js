import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Upper case was clicked")
        let newText=text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to uppercase..!!","success")
    }
    const handleClearClick = ()=>{
        console.log("Clear Text Area")
        let newText=''
        setText(newText)
        props.showAlert("Text Cleared..!!","success")
    }
    const handleLoClick = ()=>{
        let newText=text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lowercase..!!","success")
    }

    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)        
    }

    const handleCopyClick = ()=>{
        let newText=document.getElementById("myBox")
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.showAlert("Copied to Clipboard..!!","success")
    }

    const handleExtraSpace = ()=>{
        let newText=text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed..!!","success")
    }

  const [text,setText]=useState("")
  return (
      <>
            <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">                
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"
                    style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} ></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Space</button>
            </div>
            <div className="conatiner my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
               <h2>Your Text Summary</h2> 
               <p> Word Count: {text.length>0?text.trim().split(" ").length:0} | Character Count: {text.length} | Line Count: {text.split("\n").length}</p>
               <p>{0.008*text.split(" ").length} Minutes read</p>
               <h2>Preview</h2>
               <p>{text.length>0?text:"Enter something to preview:"}</p>
            </div>
        </>
  )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired
}