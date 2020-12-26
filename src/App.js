import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import "./App.css"; 
import Welcome from "./components/Welcome/Welcome";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import ImagesPage from "./components/ImagesPage/ImagesPage";
// import PostsPage from "./components/PostsPage/PostsPage";
// import PostDetail from "./components/PostsPage/PostDetail";
import NoMatch from "./components/NoMatch/NoMatch";
import PostsPage from "./components/PostsPage/PostsPage";
import PostDetail from "./components/PostsPage/PostDetail";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser}}>
        <div className="text-center">
        <Router>
          <Switch>
              <Route exact path="/" component={Welcome}></Route>
              <Route  path="/home" component={HomePage}></Route>
              <Route  path="/image" >
                <ImagesPage></ImagesPage>
              </Route>
              <Route path="/postPage">
                <PostsPage/>
              </Route>

              <Route  path="/post/:postId">
                <PostDetail/>
            </Route>




            <Route path="*">
              <NoMatch/>
            </Route>
              
          </Switch>
        </Router>
        </div>
    </UserContext.Provider>
  );
}

export default App;
