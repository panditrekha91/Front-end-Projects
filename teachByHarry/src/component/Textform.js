
import React,{useState} from "react";

export default function Textform(props){

    const[text, settext]=useState("enter text here");

  const handleupclick=()=>{
    console.log("uppercase was clicked"+text);
    let newtext= text.toUpperCase();
    settext(newtext);
  }
  const handleonchange=(event)=>{
    console.log("onchane");
    settext(event.target.value);
  }
  const handlelowerclick=()=>{
    let lowtext=text.toLowerCase();
    settext(lowtext);
  }
 const handleclearclick =()=>{
    settext("");
 }

 const handlercappitalize=()=>{
  let cap= text.split.toLowerCase();
  console.log(cap)
  let c= cap.charAt(0).toUpperCase()+cap.slice(1);
  
  settext(c);
  
 }

    return(
      <>
        <div>
          
    
  <div className="mb-3" style={{color:props.mode===('dark')?'white':'black'}}>
  <h2>{props.heading}</h2> </div>
    <textarea className="form-control" value={text} onChange={handleonchange} style={{ backgroundColor: props.mode==='dark'? 'white': 'gray',color:props.mode==='dark'? 'white': 'black'}}  id="exampleFormControlTextarea1" rows="3"></textarea>
  
  <button className="btn btn-primary mx-3" onClick={handleupclick}>Conver to uppercase</button>
  <button className="btn btn-warning mx-3" onClick={handlelowerclick}>Conver to lowercase</button>
  <button className="btn btn-success mx-3" onClick={handleclearclick}>Clear</button>
  <button className="btn btn-success mx-3" onClick={handlercappitalize}>capitalize</button>
       <div className="container" my-3>
        <p>Charater:{text.length} and Word are:{text.split(" ").length}</p>  
        </div>             
        </div>
        </>
    )
}


