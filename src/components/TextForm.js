import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log('Upper case was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText) ;
        props.showAlert("Converted to Upper case!", "success")
    }

    const handleLowClick = () => {
        console.log('Lower case was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText) ;
        props.showAlert("Converted to Lower case!", "success")
    }

    const handleClearText = () => {
        console.log('Clear text was clicked' + text);
        let newText = '';
        setText(newText) ;
    }

    const handleExtraSpace =() => {
      console.log('Clear extra space was clicked');
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
    }
    
    const handleCopy =() => {
      var text = document.getElementById('myBox');
      text.select();  
      navigator.clipboard.writeText(text.value);
    }

    const handleOnChange = (event)=> {
        console.log('On Change');
        setText(event.target.value);
    }
    const [text, setText] = useState("");
  return (
    <>
     <div className='container'  style= {{color: props.mode === 'dark'? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style= {{backgroundColor: props.mode === 'dark'? 'grey' : 'white',
        color:  props.mode === 'dark'? 'white' : '#042743'  }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower case</button>
      <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style= {{color: props.mode === 'dark'? 'white' : '##042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.08* text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p> {text.length> 0? text : "Enter something in the textbox to preview it"}</p>
    </div>
    </>
   
  );
}
