import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import "./App.css";
import Wellcome from "./components/Welcome/Welcome";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser}}>
        <div className="text-center">
          <h1>Bismillah App</h1>
        <Router>
          <Switch>
            <Route >
              <Wellcome></Wellcome>
              </Route>
          </Switch>
        </Router>
        </div>
    </UserContext.Provider>
  );
}

export default App;
