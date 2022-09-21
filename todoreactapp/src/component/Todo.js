import React, { useState } from "react"

import './Todo.css'
export default function Todo()
{
    
    const[inputdata, setinputdata]=useState('');
    const[item, setitem]=useState([]);

   

    const Additeminlist=()=>{
        if(!inputdata)
        {
            alert("Input box should not empty")
        }
        else{
        setitem([...item, inputdata])
        setinputdata('');
        }
    }

    const deletitem=(id)=>{
        const updateitem= item.filter((elem, ind)=>{
            return ind !== id;
        })

        setitem(updateitem);

    }

    const Removeall=()=>{
        setitem([])
    }

    const edititem=(id)=>{
const edittext=item.find((elem, ind)=>{
    return ind===id;
})



    }

const sethandler=(e)=>{
    setinputdata(e.target.value);
    console.log(setinputdata(e.target.value));
}
    return(
        <>
        <div className="Parentdiv">
        <div className="child-div">
            <figure>
            <h3>Add Task here</h3> </figure>
            
            <div className="additem">
            <input type="text" value={inputdata} onChange={sethandler} placeholder="Enter task here"/>
            <button type="button" class="btn btn-success" onClick={Additeminlist}>Add Task</button>
            </div >

            <div className="showAllitem">
                {
                    item.map((elem, ind)=>{
                        return(
                            <div className="eachitem my-2" key={ind}>
                            <h5>{elem} </h5><i class="fa-solid fa-pen-to-square" onClick={()=>{edititem(ind)}}></i>
                            
                            <i className="fa-solid fa-trash" onClick={()=>{deletitem(ind)}}></i>  
                        </div>
                        )
                    })
                }

               
            </div>

            <div className="removebutton">
            <button type="button" class="btn btn-success" onClick={Removeall}>Remove All</button>
            </div>


        </div>

        </div>
        
        </>
    )
}
