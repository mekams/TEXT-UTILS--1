import './App.css';
import Navbar from './components/Navbar'
import Form from './components/Form'
import { useState } from 'react';
import Footer from './components/Footer';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("light")
  let toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark")
        document.body.style.backgroundColor = '#0b1239';
    }else{
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Navbar title="Text-Utils" mode= {mode} toggleMode={toggleMode}/>
      <Form heading="Enter the text below to manipulate:" mode={mode}/>
      <Footer mode= {mode}/>
      {/* <About/> */}
    </>
  );
}

export default App;
