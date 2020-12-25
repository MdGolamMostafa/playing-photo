import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import "./App.css";
import Wellcome from "./components/Welcome/Welcome";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser}}>
        <div className="text-center">
        <Router>
          <Switch>
            
              <Route exact path="/" component={Wellcome}></Route>
              <Route  path="/home" component={HomePage}></Route>
              
          </Switch>
        </Router>
        </div>
    </UserContext.Provider>
  );
}

export default App;
