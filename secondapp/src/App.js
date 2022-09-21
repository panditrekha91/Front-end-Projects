
/*import { useState, useEffect } from 'react';
import Table from "./component/Table";


function App() {
  const [state, setUpdateState] = useState([]);

  const userInputHandler = (event) =>{
    let val = event.target.value;
     console.log(event.target.value)
     setUpdateState(event.target.value)
  }

  const peopledata=[
    {id:1, name:"XYZ", username:"Xyz", phone:"4578485212", email:"xyz@gmail.com" },
    {id:2, name:"abc", username:"abc", phone:"45784854500", email:"abc@gmail.com" },
    {id:3, name:"pkq", username:"pkq", phone:"4578444212", email:"xyz@gmail.com" }
  ]
  
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUpdateState(data));
  // }, []);

  
  return (
    <div className="blank">
      <form>
        <input type="text" onChange={userInputHandler}></input>
        <p>{state}</p>
      </form>
      <Table dataPass={peopledata}></Table>
    </div>
  );
}
*/

//import React, { useState } from "react";

//practice 18-08-2022
// import React, { useState, useEffect } from "react";
// import Table from "./component/Table";

// function App() {
//   const [state, setUpdateState] = useState([]);

 
//   useEffect(() => {
//     fetch("http://localhost:9001/get-all-record"
//     )
//       .then((response) => response.json())
//       .then((data) => setUpdateState(data));
//   }, []);

//   console.log(state);
//   return (
//     <React.Fragment>
//       <Table dataPass={state}></Table>
//     </React.Fragment>
//   );
// }



//practice 19-08-2022
/*import { useState, useEffect, useReducer } from 'react';
function App()
{

  const[state, setstate]= useState(0);

  //   function updateHandler() {
  //   setstate(state + 1);
  // }
  // setTimeout(updateHandler, 1000);

  useEffect(()=>{
    function updateHandler() {
      setstate(state + 1);
    }
    let timer= setTimeout(updateHandler, 1000);
    return()=>{
      clearTimeout(timer);
    };

  }, [setstate]);


  //useReducer to manage complex states
  //level -1 
  const[state1, updatestate]= useState(0);
  const increasehandler=()=>{
    updatestate((state1)=>state1 + 1)
  }
  const decresehandler=()=>{
    updatestate((state1)=>state1 - 1)
  }
  const resethandler=()=>{
    updatestate((state1)=>state1 = 0)
  }


  //level-2
  const reducer = (state3, action)=>{
    switch(action)
    {
      case"add":
      return state3 + 1;
      case"sub":
      return state3 -1;
      case"reset":
      return state3 = 0;
      default:
        throw new Error("Incorrect Input.")
    }
  }

  const [state3, dispatch]= useReducer(reducer, 0);
  return(
  
    <>
  <div>
    <h1>{state}</h1>

    <div align="center">
      <h1 style={{color:"red"}}>{state1}</h1>
    <button type="submit" onClick={increasehandler} className="btn btn-success">Increase </button>
    <button type="submit" onClick={decresehandler} className="btn btn-warning mx-5">Descrease </button>
    <button type="submit" onClick={resethandler} className="btn btn-primary">Reset </button>
    </div>

    <div style={{border:"2px solid red",width:"50%"}}>

    <button type="button" className="btn btn-success" onClick={()=> dispatch("add")}>Increase</button>
        <button type="button" className="btn btn-warning mx-5" onClick={()=> dispatch("sub")}>Decrease</button>
        <button type="button" className="btn btn-danger" onClick={()=> dispatch("reset")}>Reset</button>
        <h2>{state3}</h2>
    </div>

  </div>
    </>
  );
}
*/

//22-08-2022
// import React from "react";
// import Sidebar from "./component/side/Sidebar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavigationBar from "./component/NavigationBar";
// import Home from "./component/side/Home";
// import AboutUs from "./component/side/AboutUs";
// import Contact from "./component/side/Contact";

// import "./App.css";

// function App()
// {

//   return(
//     <>
// <div>
// <NavigationBar></NavigationBar>
//   {/* <BrowserRouter>
//       <Routes>
   
//           <Sidebar></Sidebar>   
//           <Route path="/home" element={<Home />} />
//           <Route path="/about-us" element={<AboutUs />} />
//           <Route path="/contact" element={<Contact />} />
//   </Routes>    
//   </BrowserRouter> */}
  
//   </div>
//     </>
//   );
// }
// export default App;


import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";
import Home from "./component/side/Home";
import AboutUs from "./component/side/AboutUs";
import Contact from "./component/side/Contact"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavigationBar/>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
