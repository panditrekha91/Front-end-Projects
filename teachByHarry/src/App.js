
import React, { useState, useEffect } from "react";
import Navbar from "./component/Navbar";
//import Registration from "./component/Registration";
import Textform from "./component/Textform";


function App() {

  const[mode, setmode]= useState('light');

  const togglemodechange=()=>{

    if(mode==='light')
    {
      setmode('dark')
      document.body.style.backgroundColor="gray"}
    else
    {setmode('light')
    document.body.style.backgroundColor="white"
  }
  }
  return (  
    <>    <div className="App">
      <Navbar mode={mode} Togglemode={togglemodechange}/>
    <h1>Hello</h1>
    <Textform heading="Enter the text to analyze" mode={mode}></Textform>
    </div>
   
    </>

  );
}

export default App;
