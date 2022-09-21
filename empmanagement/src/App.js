
import './App.css';
import NavBar from "./component/NavBar";
import AddEmployee from "./component/AddEmployee";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeeList from './component/EmployeeList';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route, 
// } from "react-router-dom";
 
function App() {
  return (
    <><div>
   {/* <Router>
    <NavBar></NavBar>
        <Routes>
          <Route path="/Addemp" >
          </Route> 
        </Routes>
        </Router>
        <AddEmployee></AddEmployee> */}



<Router>
        <NavBar></NavBar>
        <Switch>
        <Route path="/" component={EmployeeList}></Route>
          <Route path ="/insert" component={AddEmployee}></Route>
          <Route path="/showlist" component={EmployeeList}></Route>
          <Route path="/updateemp/:empid" component={AddEmployee}></Route>
          <Route path="/deleteemp/:empid" component={AddEmployee}></Route>
        </Switch>
      </Router> 
      
    </div>
    </>
  )
}

export default App;
