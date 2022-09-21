import React from "react";
import {useState} from "react" 
import "../App.css";
import About from "./About";
//import About from "./About";


export const UserContext = React.createContext();

 function Home(props){
//console.log("im home component")
    const[name, setName]= useState()
    const[dname, setDname]= useState()

    const operation=(e)=>{
        e.preventDefault();
       props.onClick(name);
       setDname(name);
    }


    return(
        <div>
            <div className="parentdiv">
                <h1>This is home component</h1>
                <form>
       Enter Name: <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name: "></input>
      <button type="submit" onClick={operation}>Submit</button> 
    

      
        </form>
        </div>
        </div>

    )
}

export default Home;