
import './App.css';
import Listofstudent from "./component/Listofstudent";
import Registration from "./component/Registration";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from "./component/NavBar";
//import Update from "./component/Update";
 
function App() {
  return (
    <>
    <div className="App">
       {/* <BrowserRouter>
        <Switch>
          <Route path="/" exact>
          
               <Registration/>
          </Route>
      </Switch>
    </BrowserRouter> */}

       {/* <BrowserRouter>
        <Routes>
          <Route exact path="/registration" component={Registration}> </Route>
          <Route path="/student" component={Listofstudent}></Route>
               
         
      </Routes>
    </BrowserRouter> */}

<Router>
        <NavBar></NavBar>
        <Switch>
          <Route path ="/insert" component={Registration}></Route>
        <Route path="/student" component={Listofstudent}></Route>
          <Route path="/update-student/:id" component={Listofstudent}></Route>
        </Switch>
      </Router> 

    
    </div>
    </>
  );
}
 
export default App;