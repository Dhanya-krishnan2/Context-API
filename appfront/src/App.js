
import './App.css';
import AddUser from './Components/AddUser';
import DeleteUser from './Components/DeleteUser';
import EditUser from './Components/EditUser';
import Home from './Components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "react-strap";

function App() {
  return (
    <div style={{maxWidth: "30rem", margin:"4rem auto" }} >
      <Router>
        <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/adduser" component={AddUser} />
        <Route path="/deleteuser" component={DeleteUser} />
        <Route path="/edituser" component={EditUser} />
     
        </Switch>
        </Router>
      
  
      
    </div>
  );
}

export default App;
