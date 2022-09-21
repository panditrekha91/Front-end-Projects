import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams} from "react-router-dom";
import APIservice from "./APIservice";
import "../App.css"


function ShowAllcontact(){
const[list, setlist]= useState([])

// const{id}= useParams();

// if(id)
// {
//     console.log("reci=============",id)
//         APIservice.deletenumber(id).then((response)=>{
//             alert(response.data);
//             //useHistory('ShowAllcontact');
//         }).catch(error=>
//             {
//                 console.log(error)
//             })
//     }

useEffect(()=>{

    APIservice.getcontact().then((response)=>{
        setlist(response.data);
        console.log(response.data);

    }).catch(error=>{
        console.log(error);
    })
},[])

const deletenumber=(eid)=>{

    //console.log("========",eid);
    APIservice.deletenumber(eid).then((response)=>{
      
        APIservice.getcontact().then((response)=>{
            setlist(response.data);
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
    <div className="parent">
    <Link to = "/add-contact" className = "btn btn-success mb-2" > Add contact </Link>
    <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email ID</th>
      <th>Phone Number</th>
      <th>Address</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
     {
        list.map((e)=>{
            return(
            <tr key={e.id}>
            <td>{e.id}</td>
           <td>{e.name}</td>
           <td>{e.email}</td>
           <td>{e.mobno}</td>
           <td>{e.address}</td>
           <td>

          

           {/* <Link className="btn btn-success" to={`delete/${e.id}`} >Delete</Link> */}
           <Link className="btn btn-warning" to={`update-contact/${e.id}`} >Update</Link>
           <button className = "btn btn-success" onClick = {() => deletenumber(e.id)}
                                    > Delete</button>

           </td>
                
          </tr>)
        })
      
      }

  </tbody>
</table>

    </div>
</div>

)

}
export default ShowAllcontact;