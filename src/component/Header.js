import React from "react";

export default function Header ()
{

    const clickfun=()=>{
        alert("display mee=====");
    }
    return(
        <>
        <button onClick={clickfun}>Hello Butoon</button>


        </>
    )
}