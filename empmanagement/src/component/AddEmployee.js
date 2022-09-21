import React from "react";
import { useState, useEffect} from "react";
import "../App.css";
import APIservice from "./APIservice"
import{Link, useHistory, useParams} from "react-router-dom";

function AddEmployee(){


const[name, setname]=useState()
const[salary, setsalary]=useState()
const[joindate, setjoindate]=useState()
const[email, setemail]=useState();
const history= useHistory();
const {empid}= useParams();

console.log("accepted employye id is=====",empid);

const addfun=(em)=>{
em.preventDefault();

const emp={name,salary,joindate,email}
//console.log(emp);

if(empid)
{
  APIservice.updateEmployee(empid, emp).then((response) => {
    history.push('/showlist')
}).catch(error => {
    console.log(error)
})
}
  else{
  APIservice.addemployee(emp).then((response) =>{
  console.log(response.data)
  alert(response.data);

  history.push('/showlist');

}).catch(error => {
  console.log(error)
})

}

}

useEffect(() => {

  APIservice.getEmployeeById(empid).then((response) =>{    
      setname(response.data.name)
      setsalary(response.data.salary)
      setjoindate(response.data.joindate)
      setemail(response.data.email)
  }).catch(error => {
      console.log(error)
  })
}, [])

const title = () => {

  if(empid){
      return <h2>Update Employee</h2>
  }else{
      return <h2>Add Employee</h2>
  }
}

    return(
    
        <div className="container">
          <h2>Add Employee Information</h2>
          <div>
        <form>
    

  <div className="form-group">
    <input type="text" className="form-control" placeholder="Enter Employee Name" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
  </div>

  <div className="form-group">
    <input type="text" className="form-control" placeholder="salary" value={salary}  onChange={(e)=>{setsalary(e.target.value)}}/>
  </div>

  <div className="form-group">
    <input type="text" className="form-control" placeholder="Date of joining date should be yyyy-mm-dd" value={joindate}  onChange={(e)=>{setjoindate(e.target.value)}}/>
  </div>

  <div className="form-group">
    <input type="email" className="form-control" placeholder="Employee email" value={email}  onChange={(e)=>{setemail(e.target.value)}}/>
  </div>

  <button type="submit" className="btn btn-primary" onClick={addfun}>Submit</button>
</form>
</div>  </div>    
    )
}

export default AddEmployee;