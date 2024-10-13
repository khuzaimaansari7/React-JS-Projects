import React, {useState} from 'react';


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
    const handleSentence = () => {
        let newText = text.split('\n').map(line => line.charAt(0).toUpperCase() + line.slice(1)).join('\n');      
        setText(newText);
        props.showAlert("Text Converted to Sentence Case!", "success");
    };
    const handleExtSpace = () => {
        // Check if the text contains extra spaces
        if (text.match(/[ ]{2,}/)) {
            // If there are extra spaces, remove them
            let extSpace = text.split(/[ ]+/);
            setText(extSpace.join(" "));
            props.showAlert("Extra spaces removed!", "success");
        } else {
            // If no extra spaces are found, show a different alert
            props.showAlert("No extra spaces found!", "warning");
        }
    };

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
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleUpClick}>Uppercase</button>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleLowClick}>Lowercase</button>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleSentence}>Sentencecase</button>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleExtSpace}>Remove Extra Spaces</button>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleCopyClick}><i className="fa-solid fa-copy"/></button>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleResetClick}><i className='fas fa-trash'/></button>
            </div>
            <div className={`container my-3 text-${props.mode === 'light'? 'dark': 'light'}`}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text.length} characters</p>
                <p>Reading Time: {0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} min</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text: "Nothing to preview!"}</p>
                <button disabled = {text.length === 0} className="btn btn-outline-success mx-1 my-1" onClick={handleCopyClick}><i className="fa-solid fa-copy"/></button>
            </div>
        </>
  )
}
