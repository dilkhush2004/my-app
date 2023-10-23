import React, {useState}from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let newtext=text.toUpperCase();
        setText(newtext);
    }
    const handleLoClick=()=>{
      let newtext=text.toLowerCase();
      setText(newtext);
  }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    // const copyText=()=>{
    //  var text=document.getElementById("myBox");
    //   text.select();

    // }
    const [text, setText] = useState('Enter text here');

  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'dark'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'dark':'light', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upeercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        {/* <button className="btn btn-primary mx-1" onClick={copyText}>Copy Text</button> */}
    </div>
    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'dark':'light', color: props.mode==='dark'?'white':'dark'}}>
      <h1>Text Summary </h1>
      <p>word {text.split(" ").length} and character {text.length}</p>
    </div>
    </>
  )
}
