import axios from "axios";
import { useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import Apiservice from "./Apiservice";
import {useParams} from 'react-router-dom';

import "./Registration.css";
 
function Registration()
{

   const [id, setId] = useState("");
   const [fname, setFname] = useState("");
   const [lname, setLname] = useState("");
   const [city, setCity] = useState("");
   const [phone, setPhone] = useState("");

   const [salary, setSalary] = useState("");
const history=useHistory();
const {sid}= useParams();
   
 
//    async function handleSubmit(event)
//     {
//         event.preventDefault();
//     try
//         {
//          await axios.post("http://localhost:9001/save",
//         {
//         id: id,
//         fname: fname,
//         lname : lname,
//         city : city,
//         phone : phone,
//         salary :salary
//         });
        
//           alert("User Registation Successfully");
//           setId("");
//           setFname("");
//           setLname("");
//           setCity("");
//           setPhone("");
//           setSalary("");
        
//         }
//     catch(err)
//         {
//           alert("User Registation Failed");
//         }


    const save =(e)=>{
        e.preventDefault();

        const stud={id,fname,lname,city,phone,salary}
        console.log(stud);
        Apiservice.createstudent(stud).then((response)=>{
            console.log(response.data)
            alert(response.data)
        }).catch(error =>{
            console.log(error);
        })
    }

    useEffect(()=>{
        Apiservice.getstudentbyid(sid).then((response)=>{
            setId(response.data.id)
            setFname(response.data.fname)
            setLname(response.data.lname)
            setCity(response.data.city)
            setPhone(response.data.phone)
            setSalary(response.data.salary)
            console.log(response.data);
        }).catch(error =>{
            console.log(error)

        })
    },[])

    const title=()=>{
        if(sid)
        {
            return<h2 className="text-center">Update student</h2>
        }
        else{
            return<h2 className="text-center">Add student</h2>
        }
    }
   
    return (

        <div className="register-container">
            {
                title()
            }
            <form className="register-form" onSubmit={save}>
            <br></br>      
            <h1>Register</h1>
            {/* <p>Fill in the Information Below</p> */}
            
 
            <input type="text"
             name="id"
             value={id}
             placeholder="id"
                    
             onChange={(event) =>
              {
                  setId(event.target.value);      
              }}
            />
              <input type="text"
            name="fname"
            value={fname}
            placeholder="fname"
            onChange={(event) =>
                {
                    setFname(event.target.value);      
                }}
            />
 
            <input type="text"
            name="lname"
            value={lname}
            placeholder="lname"
            onChange={(event) =>
                {
                    setLname(event.target.value);      
                }}          
            />
 
            
            <input type="text"
            name="city"
            value={city}
            placeholder="city"
            onChange={(event) =>
                {
                    setCity(event.target.value);      
                }}          
            />
        <input type="text"
            name="phone"
            value={phone}
            placeholder="phone"
            onChange={(event) =>
                {
                    setPhone(event.target.value);      
                }}          
            />
 
    <input type="text"
            name="salary"
            value={salary}
            placeholder="salary"
            onChange={(event) =>
                {
                    setSalary(event.target.value);      
                }}          
            />
 
            <button type="submit">Register</button>
 
    
            </form>    
 
    
        </div>
    )
}
 
export default Registration;