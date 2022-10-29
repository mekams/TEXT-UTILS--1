import "./App.css";
import React, { useState } from "react";
// import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Alert from "./components/Alert";
import About from "./components/About";



import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null); //initial alert set to null
  let showAlert = (message, type) => {
    // parameters for alets
    setAlert({
      msg: message, //object created
      type: type,
    });
    setTimeout(() => {
      setAlert(null); //async timeout for alert display, time mentioned in milliseconds
    }, 2200);
  };

  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0b1239";
      showAlert("Dark mode enabled", "success");
      /* document.title="Dark mode enabled"       //test purpose
        setInterval(() => {
         window.alert("hello")
        }, 3000);
        setInterval(() => {
          window.alert("good bye---virus attack")
          }, 2000);*/
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled", "success");
      // document.title="light mode enabled"
    }

    
  };
  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>     {/*exact path means to the exact keyword which is written in address */}
          <Route exact path="/" element={<Form heading="Convert your text :" mode={mode} showAlert={showAlert}/>}/>
        </Routes>
        <Footer mode={mode} />
      </Router>
    </>
  );
}

export default App;
