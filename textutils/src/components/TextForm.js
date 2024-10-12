import React, {useState} from 'react';
import _ from 'lodash';


export default function TextForm(props) {
    const [text, setText] = useState('Enter Text Here');

    const handleUpClick = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
        props.showAlert("Text Converted to UpperCase!", "success");
    }
    const handleLowClick = () => {
        let lowerCase = text.toLowerCase();
        setText(lowerCase);
        props.showAlert("Text Converted to LowerCase!", "success");
    }
    const handleResetClick = () => {
        setText("");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied To Clipboard", "success");
    }
    const handleSentence = () =>{
        let newText = _.capitalize(text);
        setText(newText)
        props.showAlert("Text Converted to SentenceCase!", "success");
    }
    const handleExtSpace = () =>{
        let extSpace = text.split(/[ ]+/);
        setText(extSpace.join(" "));
        props.showAlert("Extra Space Removed!", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    return (
        <>
            <div className='container'>
                <h1 className={`text-${props.mode === 'light'? 'dark': 'light'}`}>{props.heading}</h1>
                <div className= "mb-3">
                    <textarea className={`form-control text-${props.mode === 'light'? 'dark': 'light'} `} value={text} onChange={handleOnChange} 
                    style=
                    {
                        {
                            backgroundColor: props.mode === 'dark'? '#111313': 'white',
                            borderColor: 'var(--bs-success)'
                        }
                    } id="myBox" rows="10"></textarea>
                </div>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleLowClick}>Lowercase</button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleSentence}>Sentencecase</button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleExtSpace}>Remove Extra Spaces</button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleCopyClick}><i className="fa-solid fa-copy"/></button>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleResetClick}><i className='fas fa-trash'/></button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light'? 'dark': 'light'}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>Reading Time: {0.008 * text.split(" ").length} min</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Enter something to preview here."}</p>
                <button className="btn btn-outline-success mx-1 my-1" onClick={handleCopyClick}><i className="fa-solid fa-copy"/></button>
            </div>
        </>
  )
}
