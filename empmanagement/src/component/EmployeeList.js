import React, { useEffect } from "react";
import{useState} from "react";
import APIservice from "./APIservice";
import{Link} from "react-router-dom";

function EmployeeList(){
const [emp, setemp]=useState([])

useEffect(()=>{
    APIservice.getemployeelist().then((response)=>{
        setemp(response.data);
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
    //getAllemployees();

},[])



const deleteemployee = (empid)=>
{
console.log(empid);

APIservice.deleteemploy(empid).then((response)=>{

    APIservice.getemployeelist().then((response)=>{
        setemp(response.data);
        console.log(response.data);
    }).catch(error=>{
        console.log(error);
    })
    



}).catch(error=>{
  console.log(error);
})
}

    return(

<div>
<div className="my-3">
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Salary</th>
      <th>Join date</th>
      <th>Email Id</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
        emp.map( e=>
    <tr key={e.empid}>
      <td>{e.empid}</td>
      <td>{e.name}</td>
      <td>{e.salary}</td>
      <td>{e.joindate}</td>
      <td>{e.email}</td>
      <td>
      <Link className="btn btn-info" to={`updateemp/${e.empid}`} >Update</Link>
      
      <button className="btn btn-warning" onClick = {()=> deleteemployee(e.empid)}>delete</button></td>
    </tr>)
  }
  </tbody>
</table>
</div>
</div>
    )
}

export default EmployeeList;