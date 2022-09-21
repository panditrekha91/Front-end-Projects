import React from "react";
import{Link,useHistory,useParams} from "react-router-dom";
import APIservice from "./APIservice";
import { useLocation } from "react-router-dom";

function Delete(){

    const search = useLocation().search;
    const id=new URLSearchParams(Delete).get("id");
    console.log(id);//12345

//const{id}= useParams();
//console.log(id);

console.log("reci=============",id)
        APIservice.deletenumber(id).then((response)=>{
            alert(response.data);
            console.log(response.data);
           // useHistory('ShowAllcontact');
        }).catch(error=>
            {
                console.log(error)
            })


    return(
        <>
        
        </>
    )
}
export default Delete;