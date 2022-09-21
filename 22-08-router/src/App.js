
import './App.css';
import Home from './component/Home';
import About from './component/About';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useState } from 'react';
import Navbar from "./component/Navbar";


function App() {

const [id, setId]=useState();
   const getdata=(data)=>{
    setId(data);
console.log("coming from componenennnent.....",data)
  }
  return (
    <div>
      <Router>
      <Switch>
        <Route exact path="/" component={Navbar}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path= "/about" component={About}></Route>
      </Switch>
      </Router>
  

    </div>
  )
}

export default App;
