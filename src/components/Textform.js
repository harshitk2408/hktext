import React, { useState } from 'react'
export default function Textform(props) {
    const [text, setText] = useState('')
    const handleonclick = () => {
        let n = text.toUpperCase()
        setText(n)
        props.changealert("Converted to UPPERCASE", "success")
    }
    const handleonchange = (event) => {
        console.log("Change")
        setText(event.target.value)
    }
    const handleonclicklower = (event) => {
        let n = text.toLowerCase()
        setText(n)
        props.changealert("Converted to lowercase", "danger")
    }
    const textdarkstyle = {
        color: 'white'
    }
    const textlightstyle = {
        color: 'black'
    }
    const areadarkstyle = {
        backgroundColor: 'grey',
        color: 'white'
    }
    const arealightstyle = {
        backgroundColor: 'white',
        color: 'black'
    }
    return (
        <div style={props.mode == 'dark' ? textdarkstyle : textlightstyle}>
            <div className="container mb-3">
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} style={props.mode == 'dark' ? areadarkstyle : arealightstyle} id="exampleFormControlTextarea1" onChange={handleonchange} rows="8"></textarea>
                <button className={`btn btn-${props.mode == 'dark' ? 'light' : 'dark'} mt-3`} onClick={handleonclick}>Convert to upper</button>
                <button className={`btn btn-${props.mode == 'dark' ? 'light' : 'dark'} mt-3 mx-3`} onClick={handleonclicklower}>Convert to lower</button>
            </div>
            <div className='container'>
                <h1>Your text summary</h1>
                <p>Words are {text.split(" ").length} and Characters are {text.length}</p>
                <h2>Preview</h2>
                <p>{text.length == 0 ? "Enter something to preview" : text}</p>
            </div>

        </div >
    )
}
