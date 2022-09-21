import axios from "axios";

class Apiservice{


    getAllstudent(){
return axios.get("http://localhost:9001/getall")
    }

    createstudent(stud){
        return axios.post("http://localhost:9001/save", stud)

    }

    getstudentbyid(id)
    {
        return axios.get("http://localhost:9001/updateuing_responseEntity"+'/'+id)
    }
}

export default new Apiservice();