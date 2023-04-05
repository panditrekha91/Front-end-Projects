
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

    const counterupdate=( )=>{
console.log("something")
    }
  return (
    
<div>
      <Table datapass={peopleData}></Table>

     
      {state}
      <button onClick={updatehandler}>Increase Count</button>

      <br></br>
      <Header></Header>

      <button onClick={counterupdate}>Counter</button>
    </div>
  );
}

export default App;
