import React, {useState} from 'react';

export default function TextForm(props) {  
   const handleUpClick = ()=>{
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted to uppercase","success");
    }

    const handleLoClick = ()=>{
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Converted to lowercase","success");
    }

    const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Text copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    props.showAlert("Copy to clipboard","success");
  };

    const handleClearClick = () => {
       let newText = '';
       setText(newText);
       props.showAlert("Cleared","success");
    }

    const handleRemoveExtraSpace = () => {
      let newText = text.split(/[" "]+/);
      setText(newText.join(" "));
      props.showAlert("Removed Extra Spaces","success");
    }

    const handleOnChange = (event)=>{
       setText(event.target.value);
    }

    const [text, setText] = useState('');
    // setText("Enter Your Text");

  return (
     <>
    <div className='container'style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea className="form-control" onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#042743':'white',
          color: props.mode==='dark'?'white':'#042743'}} value={text} id="textBox" rows="8"></textarea>

        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleCopyClick}>Copy</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveExtraSpace}>Remove Extra Space</button>
      </div>
    </div>

    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your Text Summary</h1>
      <p>{text.trim().split(" ").filter(text => text !== "").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>

    </>
  )
}
