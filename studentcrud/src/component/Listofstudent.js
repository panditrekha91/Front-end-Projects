import { useEffect, useState } from "react";
import Apiservice from "./Apiservice"
import {Link} from 'react-router-dom';

function Listofstudent()
{
    const[student, setstudent]=useState([])

    useEffect(()=>{
        Apiservice.getAllstudent().then((response)=>{
            setstudent(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

   
    return(
        <>
        <div className="container">
            <h2 classname="text-center">Student list</h2>

            <table className="table table-striped">
       <thead className="thead-dark">
    <tr>
      <th>Id</th>
      <th>fname</th>
      <th>lname</th>
      <th>city</th>
      <th>phone</th>
      <th>salary</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
    
        // student.map(singleObj => {
        //                       <tr key={singleObj.id}>
                               
        //                         <td>{singleObj.fname}</td>
        //                         <td>{singleObj.lname}</td>
        //                         <td>{singleObj.city}</td>
        //                         <td>{singleObj.phone}</td>

        //                         <td>{singleObj.salary}</td> 
        //                       </tr>
                        
        //                   })

        student.map((singleObj) => {
                        return (
                          // Whenever you render a list in react you need to add an unique ID to rendering element,
                          // So react will know which part of it needs to be updated. - key={singleObj.id}
                          <tr key={singleObj.id}>
                                 <td>{singleObj.id}</td>
                                 <td>{singleObj.fname}</td>
                                 <td>{singleObj.lname}</td>
                                 <td>{singleObj.city}</td>
                                 <td>{singleObj.phone}</td>
                                 <td>{singleObj.salary}</td> 
                                 <td><Link className="btn btn-success" to="/edit-student/${singleObj.id">Update</Link></td> 
                          </tr>
                        );
                      })

                          
    }
    
    </tbody>
</table>
        </div>
        </>
    )
}

export default Listofstudent;