import React, { useContext } from "react";
import { contextStore } from "./context";

function Contact() {
  const context = useContext(contextStore);
  return (
    <div className="text-center">
      <h1>Contact</h1>
      <h3>{context.state}</h3>
    </div>
  );
}

export default Contact;