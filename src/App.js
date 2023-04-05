
import './App.css';
import { useState } from 'react';
import Table from "./component/Table"
import Header from "./component/Header"
function App() {

   const[state ,setstate]=useState(0);


    const updatehandler =()=>{
      setstate(1)
      console.log("hello rekha");
    }

    const peopleData = [
      { id: 1, name: "ABC", contact: 123456789, age: 30, salary: 15000 },
      { id: 2, name: "DEF", contact: 789456123, age: 31, salary: 20000 },
      { id: 3, name: "GHF", contact: 889955446, age: 35, salary: 30000 },
      { id: 4, name: "THJ", contact: 889456123, age: 38, salary: 45000 },
      { id: 5, name: "WER", contact: 456321789, age: 40, salary: 50000 },
      { id: 6, name: "VBL", contact: 845621203, age: 45, salary: 65000 },
    ];

    const[another,setanother]=useState(0)    // for this state we are taking the value from user

    const counterupdate=(event)=>{
      setanother(event.target.value)
    }

const filtdata= peopleData.filter((a)=>{
  return a.salary>another            //here apply filter by user accepted value then pass to Table component then only greater salary than another stat value will show
})


  return (
    
<div>
      <Table datapass={filtdata}></Table>
      {state}
      <button onClick={updatehandler}>Increase Count</button>
      <br></br>
      <Header></Header>
    Enter User salary here: <input type="text" onChange={counterupdate}></input><br></br>
    <h>{another}</h>






      
    </div>
  );
}

export default App;
