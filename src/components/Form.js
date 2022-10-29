import React, {useState} from 'react'

export default function Form(props) {   
    const [text, setText]=useState("")        //hook property of react (useState)
   
    let handleOnChange =(event)=>{        //updating the existing value of event
        // console.log("on change");
        setText(event.target.value)
    }

     // const [ourtext, setOurtext] = useState("")
     let msg =new SpeechSynthesisUtterance()      //constructor, which will contain our speech data and information on how the application should handle it.(an Object with msg variable assigned to constructor)
     let handleSpeech = (msg) =>{
        msg.text = text
        window.speechSynthesis.speak(msg)   // function which reads aloud the text stored in the msg.text variable
     }
     let handleOnspeech =()=>{
        handleSpeech(msg)         //calls the function when you click on the button
     }


    let handleUpclick = () =>{              // to UPPERCASE
      // console.log("Uppercase Clicked "+ text)
      let newText = text.toUpperCase()
      setText(newText)
      props.showAlert("Changed to uppercase","success")  //pre-capital+prop used to pop up alert
  }

    let handleDownclick = () =>{
      let newText = text.toLowerCase()    //to lowercase
      setText(newText)
      props.showAlert("Changed to lowercase","success") 
    }

    let handleClearclick = () =>{       //clear the text area
     let newText = ""
     setText(newText)
     props.showAlert("Text cleared","success") 
    }

    let handleSpaces = () =>{              //remove extra spaces between words
      let newText = text.split(/[ ]+/)
      setText(newText.join(" "))
      props.showAlert("Extra space cleared","success") 

    }

    let handleClip = () =>{                           //copies text to clipboard
      let selText = document.getElementById("box")    //get the text area inner text by id
      selText.select()                                  //select text in text area
      navigator.clipboard.writeText(selText.value)      //copies to clipboard
      props.showAlert("Copied to clipboard","success") 
    }

    let handleCapital = () =>{
      let arr = text.split(" ")                                         //splits sentence words in to an array of substring
      for (let i = 0; i < arr.length; i++) {                            //iterates over each array of substrings
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);     //first lettter to capital and splice add rest of string as it its in lowercase
      }
      setText(arr.join(" "))      //joins array with spaces and sentence transformed
      props.showAlert("Text capitalized","success") 
    }

   

  return (
  <>
    <div className="container my-3" style={{color: props.mode==="dark"?"white":"black"}}>   {/*if dark=>white color else black */}
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="box" value={text} onChange={handleOnChange} title="Enter your text in this box" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}} rows= "4"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" title="eg: HELLO WORLD" onClick={handleUpclick}>To UPPERCASE</button>
        <button className="btn btn-primary mx-1 my-1" title='eg: "hello world"' onClick={handleDownclick}>To lowercase</button>
        <button className="btn btn-primary mx-1 my-1" title='eg: "Hello World"' onClick={handleCapital}>Capitalise Text</button>
        <button className="btn btn-primary mx-1 my-1" title='Listen the text you have written in text area' onClick={handleOnspeech}>Text to speech</button>
        <button className="btn btn-primary mx-1 my-1" title='Single space per word' onClick={handleSpaces}>Delete spaces</button>
        <button className="btn btn-primary mx-1 my-1" title='Copies to the clipboard and paste anywhere' onClick={handleClip}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" title='Blank the text area' onClick={handleClearclick}>Clear text</button>
    </div>
    <div className="container my-4" style={{color: props.mode==="dark"?"white":"black"}}>
      <h4>Summary of the above text :</h4>
      <p ><b>{text.length===0?0:text.split(" ").length}</b> Words and <b>{text.length}</b> Characters</p>
      <p><b>{text.length===0?0:0.008 * text.split(" ").length}</b> Minutes required to read on average.</p><hr/><br/>   
      <h3>Text Preview</h3>
      <p>{text.length===0?"Enter the text in the box for preview":text}</p>
    </div>
  </>
  )
}
