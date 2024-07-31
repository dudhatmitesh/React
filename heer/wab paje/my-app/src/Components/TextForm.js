import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("Upprcase was clicked");
        // setText("You have clicked on handleUpClick");
         console.log("Upprcase was clicked" + text);
         let newText = text.toUpperCase();
        setText( newText);
    }
    const handleonChange = (event) =>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState ('Enter text here');
    // text="new text";//Wrong way to change the state
    // text=("new text");//correct way to change the state
  return (
<div>
    <h1>{props. heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
</div>
  )
}
