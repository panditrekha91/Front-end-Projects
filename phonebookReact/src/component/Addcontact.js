import React, { useState, useEffect } from "react";
import "../App.css"
import APIservice from "./APIservice";
import {Link, useHistory} from "react-router-dom";
import {useParams} from "react-router-dom"
import ShowAllcontact from "./ShowAllcontact";

function Addcontact()
{
    const[name, setname] = useState('')
    const[email, setemail]=useState('');
    const[mobno, setmobno]=useState('')
    const[address,setaddress]=useState('');
    
    const history = useHistory();
    const {id}= useParams(''); 
    console.log("======",id);
    
    useEffect(() => {
      APIservice.getcontactById(id).then((response) =>{
        console.log(response.data)
          setname(response.data.name)
          setemail(response.data.email);
          setmobno(response.data.mobno)
          setaddress(response.data.address);
      }).catch(error => {
          console.log(error)
      })
    },[]);



    

    const addcontact=(e)=>{

        e.preventDefault();
    const addcon={name,email,mobno,address}
    console.log(addcon);
if(id)
{

  APIservice.updatecontact(id,addcon).then((response)=>{
    history.push('/')
  }).catch(error=>{
    console.log(error);
  })

}
else{
    APIservice.addnumber(addcon).then((response)=>
    {
        console.log(response.data);
        alert(response.data);

        history.push('/');

    }).catch(error => {
  console.log(error)
  alert("something went wrong")
})
}
    }

    const title = () => {

      if(id){
          return <h2 className = "text-center">Update contact</h2>
      }else{
          return <h2 className = "text-center">Add contact</h2>
      }
  }


const resetfun= ()=> {
   
        setname("");
        setemail("");
        setaddress("");
        setmobno("");
    }


    return(

        <div className="container">
                        {
                           title()
                         }
        <div className="child">
        
        <form>
  <div className="form-group row">
    <label htmlFor="exampleInputEmail1">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" name="name" value={name} onChange={(e)=>{setname(e.target.value)}}/>
  </div>
  
  <div className="form-group row">
    <label htmlFor="exampleInputEmail2">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail2" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail3">Mobile Number</label>
    <input type="text" className="form-control" id="exampleInputEmail3" name="mobno" value={mobno} onChange={(e)=>{setmobno(e.target.value)}}/>
  </div>

  <div className="form-group row">
    <label htmlFor="exampleInputEmail4">Address</label>
    <input type="text" className="form-control" id="exampleInputEmail4" name="address" value={address} onChange={(e)=>{setaddress(e.target.value)}}/>
  </div>
        
  <button type="submit" className="btn btn-primary" onClick={(e)=>{addcontact(e)}}>Submit</button>

  <button className="btn btn-success mx-2" onClick={resetfun}>Reset</button>

  
  <Link className="btn btn-warning mx-3" to="/"> Cancel</Link>
  
  
</form>
</div>
        </div>
    )

}


export default Addcontact;

