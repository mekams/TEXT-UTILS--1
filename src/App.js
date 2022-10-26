import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import { useState } from 'react';
import Footer from './components/Footer';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [alert, setAlert] = useState(null)  //initial alert set to null
 let showAlert = (message, type) =>{        // parameters for alets
      setAlert({
      msg: message,                          //object created
      type: type
     })
     setTimeout(() => {
      setAlert(null)                         //async timeout for alert display, time mentioned in milliseconds
     }, 2200);
 }

  const [mode, setMode] = useState("light")     
  let toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = '#0b1239';        
        showAlert("Dark mode enabled","success")
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success")
    }
  }
  return (
    <>
      <Navbar title="Text-Utils" mode= {mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Form heading="Convert your text :" mode={mode} showAlert={showAlert}/>
      <Footer mode= {mode}/>    
      {/* <About/> */}
    </>
  );
}

export default App;
