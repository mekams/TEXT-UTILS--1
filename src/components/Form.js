import React, {useState} from 'react'

export default function Form(props) {   
    const [text, setText]=useState("")        //hook property of react (useState)
   
    let handleOnChange =(event)=>{        //updating the existing value of event
        // console.log("on change");
        setText(event.target.value)
    }

    let handleUpclick = () =>{              // to UPPERCASE
      // console.log("Uppercase Clicked "+ text)
      let newText = text.toUpperCase()
      setText(newText)
  }

    let handleDownclick = () =>{
      let newText = text.toLowerCase()    //to lowercase
      setText(newText)
    }

    let handleClearclick = () =>{       //clear the text area
     let newText = ""
     setText(newText)
    }

    let handleSpaces = () =>{              //remove extra spaces between words
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
    }

    let handleClip = () =>{
      let text = document.getElementById("box")
      text.select()
      navigator.clipboard.writeText(text.value)
    }

  return (
  <>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" id="box" value={text} onChange={handleOnChange} placeholder="Enter your text in this box" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}} rows= "4"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>To UPPERCASE</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleDownclick}>To lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClip}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpaces}>Delete spaces</button>
        <button className="btn btn-primary" onClick={handleClearclick}>Clear text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
      <h4>Summary of the above text :</h4>
      <p ><b>{text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
      <p><b>{0.008 * text.split(" ").length}</b> Minutes required to read on average.</p><hr/><br/>
      <h3>Text Preview</h3>
      <p>{text.length===0?"Enter the text in the box for preview":text}</p>
    </div>
  </>
  )
}
