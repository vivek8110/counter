import React, { useState } from 'react'

function Myform() {
    const [text, settext] = useState('')
    const handleclick = () => {
        let newtext = text.toUpperCase();
        settext(newtext);
        console.log(text);

    }
    const handlelower = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        console.log(text);

    }
    const handleonchange = (event) => {
        console.log('hgnfytdtfg');
        settext(event.target.value)

    }
    return (
        <div>
            <div className="container my-5">

                <div className="mb-3">
                    {/* <label htmlFor="mytext" className="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} onChange={handleonchange} onKeyUp={handleclick} id="mytext" rows="3"></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleclick}>Convert to uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handlelower}>Convert to lowercase</button>
            </div>
            <div className="container my-5">
                <h1>my text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters are there in your text summary</p>
                <p>{text.split(" ").length * 0.008} minutes you would take to read your summary</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Myform