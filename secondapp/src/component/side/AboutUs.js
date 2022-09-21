import React, { useContext } from "react";
import { contextStore } from "./context";

function AboutUs() {
  const context = useContext(contextStore);
  const decreasehandler=()=>{
    context.updateFun();
  }
  return (
    <div className='text-center'>
      <h1>AboutUs</h1>
      <h3>{context.state}</h3>
      <button type="button" class="btn btn-warning" onClick={decreasehandler}>Deacrese</button>
    </div>
  )
}

export default AboutUs