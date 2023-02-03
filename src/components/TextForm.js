import React, { useState } from 'react'

export default function TextForm(props) {
    // Use state hool help us to to make a state variale. We inialize "text" and "setText" using use state hook in "text" there is a default value and "setText" is a function we use any time to update the text state. To update the text state we must have to make onChange handel  
    const [text, setText] = useState("Enter Text Here"); // "Enter Text Here" is the initial value or initial  state 

    const removeExtraSpaces = () => {
        let removeExtra = text.replace(/\s{2,}/g, ' ').trim()
        setText(removeExtra)

        props.showAlert("Extra Space removed", "success")
    }

    const uperCaseFunction = () => {

        // console.log("I am clicked")
        let newText = text.toUpperCase();
        setText(newText)
        // setAlertMessage('Converted To Upper Case Letter')

        props.showAlert("Converted To Upper Case", "success")
    }
    const lowerCaseFunction = () => {
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Converted To Lowerr Case", "success")
    }
    const clearTheText = () => {
        let newText = " ";
        setText(newText)

        props.showAlert("Text is clear", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value)

    }

    const emtyArea = () => {
        setText("")
    }

    return (
        <>
            <div className='container text-dark' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Write Your Text To Transform Data</label>
                    {/* Text vaviable belong to our state we can update using setText in the below line we use onchange it's mean we add value after the text. By typing the value the on change function calls again and again set the value equal to setText and we can sea the typed value */}
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} onClick={emtyArea}></textarea>
                    <button className='btn btn-primary my-3' onClick={uperCaseFunction}>Convert To Upper Case</button>
                    <button className='btn btn-primary mx-3' onClick={lowerCaseFunction}>Convert To Lower Case</button>
                    <button className='btn btn-primary mx-3' onClick={clearTheText}>Clear Text</button>
                    <button className='btn btn-primary mx-3' onClick={removeExtraSpaces}>Remove Extra Spaces</button>


                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Word Details</h1>
                <p>{text.length} alphabetes and words are {text.split(" ").length - 1}</p>
                <p>{0.008 * text.split(" ").length - 0.008} minutes are need to read these words</p>

                <h1>Preview</h1>
                <p>{text}</p>



            </div>
        </>

    )
}
