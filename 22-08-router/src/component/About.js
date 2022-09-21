
import React from "react";
import "../App.css";
import { UserContext } from "./Home";

function About(){

    const value = React.useContext(UserContext); 
    console.log(value); 

    return(
        <div className="parentdiv">
        <h1>This is About component</h1>
        <h1>Hello your name is {value}</h1>


        </div>
    )
}

export default About;