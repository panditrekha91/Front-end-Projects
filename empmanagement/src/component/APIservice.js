import axios from "axios";

class APIservice{

    getemployeelist()
    {

        return axios.get("http://localhost:9001/Getemplist")
    }
    addemployee(e)
    {
        return axios.post("http://localhost:9001/add-employee",e)

    }

    getEmployeeById(empid){
        return axios.get("http://localhost:9001/justid" + '/' + empid);
    }

    updateEmployee(employeeId, employee){
        return axios.put("http://localhost:9001/updatebyid" + '/' +employeeId, employee);
    }

    deleteemploy(empid)
    {
        return axios.delete("http://localhost:9001/delete" +'/'+ empid)
    }
}
export default new APIservice();