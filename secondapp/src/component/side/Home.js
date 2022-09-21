import React, { useContext } from "react";
import { contextStore } from "./context";

function Home() {
  // Step - 4
  const context = useContext(contextStore);
  
  const increasHandler = () => {
    context.updateFun()
  };

  return (
    <div className="text-center">
      <h1>Home</h1>
      <h3>{context.state}</h3>
      <button type="button" className="btn btn-success" onClick={increasHandler}>Increase</button>
    </div>
  );
}

export default Home;
