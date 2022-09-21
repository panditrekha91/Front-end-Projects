import axios from "axios";
import React from "react";

class APIservice{

 addnumber(number)
{
    return axios.post("http://localhost:9001/Add-Number", number)

}

getcontact()
{
    return axios.get("http://localhost:9001/getAllcontact")
}

deletenumber(eid)
{
    
    return axios.delete("http://localhost:9001/delete/"+ eid)
}

updatecontact(id,e)
{
    return axios.put("http://localhost:9001/edit/"+ id,e)
}

getcontactById(id)
{
    return axios.get("http://localhost:9001/getbyid/"+ id)
}
}

export default new APIservice();