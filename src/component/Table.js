import React from "react";

export default function Table(props)
{
    return(


        <>
<table border={2}>
<thead>
<tr>
    <th>Id</th>
    <th>Name</th>
    <th>contact</th>
    <th>age</th>
    <th>salary</th>
</tr>
</thead>
<tbody>

    {props.datapass.map((obj)=>{
       return(
      <tr> 
       <td>{obj.id}</td>
       <td>{obj.name}</td>
       <td>{obj.contact}</td>
       <td>{obj.age}</td>
       <td>{obj.salary}</td>
       </tr>
       
       )

    })}



</tbody>



</table>
        <h1>Hello Rekha</h1>
        </>
    )
}

 