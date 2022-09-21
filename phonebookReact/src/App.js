
import './App.css';
import Addcontact from './component/Addcontact';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import ShowAllcontact from './component/ShowAllcontact';
import Delete from './component/Delete';
import Home from './component/Home';

function App() {



  return (
   
   <div>
   <BrowserRouter>
   <Switch>
   <Route exact path="/"   component={ShowAllcontact}></Route>
    <Route path="/add-contact"  component={Addcontact}></Route>
    <Route path="/update-contact/:id"  component={Addcontact}></Route>
    <Route path="/delete/{id}"  component={Delete}></Route>
   </Switch>
   </BrowserRouter>

  
   </div>
   
  );
}

export default App;
