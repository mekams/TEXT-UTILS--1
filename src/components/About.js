// import React,{useState} from "react";  //hook imported
import React from "react"
import { Link } from "react-router-dom"
import img1 from  './images/text2.gif'


export default function About(props) {
    // const [btn, setBtn] = useState("Enable Dark Mode")                  //transition of button from light to dark  & vice-versa
    // const [bColor, setBColor] = useState("btn btn-warning my-4")        //set color for button while switching
    // const [myStyle, setStyle] = useState({                              // initial style of content
    //     color: "black",
    //     backgroundColor: "white",
    //     border: "1px solid"
    // })

    // let switchB = () =>{                                //enables light mode
    //     if(myStyle.color === "white"){              
    //         setStyle({
    //             color:"black",
    //             backgroundColor:"white",
    //             border: "1px solid black"
    //         })
    //         setBColor("btn btn-primary my-4")
    //         setBtn("Enable Dark Mode")
    //     }
    //     else{
    //         setStyle({                                  //enables dark mode
    //             color : "white",
    //             backgroundColor : "black",
    //             border : "1px solid white"
    //         })
    //         setBtn("Enable Light Mode")
    //         setBColor("btn btn-primary my-4")
    //     }
    // }

  return (
    <>
    <div className="container my-5" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button style={{backgroundColor:props.mode==="dark"?"#0b1239":"#C0C0C0", color: props.mode==="dark"?"white":"black"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            Fact #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
            Writing the English language is just as much an art as it is a science. No doubt, your schoolteachers gave you rules to stick to in class. But out in the real world, there’s more leeway than you may have realized. Not to worry.
            <code> You don’t need a master’s degree in publishing to be a …</code>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button style={{backgroundColor:props.mode==="dark"?"#0b1239":"#C0C0C0", color: props.mode==="dark"?"white":"black"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              Fact #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
            Text length has a huge influence on performance of your content. If there are limits, you need to be efficient. If not, you are free to write as much as you want, but in most cases, less is more. Here’s some best practice advice, backed by research
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button style={{backgroundColor:props.mode==="dark"?"#0b1239":"#C0C0C0", color: props.mode==="dark"?"white":"black"}}
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              Fact #3
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
            Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. TextUtils will help to make sure its word count reaches a specific requirement or stays within a certain limit
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <button className={bColor} onClick={switchB}>{btn}</button>     {/*onclick function as well as button set using state}
      </div> */}
    </div>

    <div className= "container">
      <div className="row ">
        <div className="col-sm-4">
          <div className="card" style={{width: "22rem"}}>
            <img src={img1} className="card-img-top" alt=""/>
                <div className="card-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
                    <h5 className="card-title">Click below</h5>
                    <p className="card-text">Manipulate text and enjoy conversion</p>
                    <Link to="/" className="btn btn-primary">Redirect to home</Link>
                </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{width: "22rem"}}>
            <img src={img1} className="card-img-top" alt=""/>
                <div className="card-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
                    <h5 className="card-title">Click below</h5>
                    <p className="card-text">Manipulate text and enjoy conversion</p>
                    <Link to="/" className="btn btn-primary">Redirect to home</Link>
                </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" style={{width: "22rem"}}>
            <img src={img1} className="card-img-top" alt="Dancing Robo"/>
                <div className="card-body" style={{backgroundColor:props.mode==="dark"?"#0b1239":"white", color: props.mode==="dark"?"white":"black"}}>
                    <h5 className="card-title">Click below</h5>
                    <p className="card-text">Manipulate text and enjoy conversion</p>
                    <Link to="/" className="btn btn-primary">Redirect to home</Link>
                </div>
          </div>
        </div>
      </div> 
      </div>
    </>
  )
}
