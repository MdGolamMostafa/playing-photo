import React, { createContext, useState } from "react";
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import "./App.css"; 
import Welcome from "./components/Welcome/Welcome";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./components/HomePage/HomePage";
import ImagesPage from "./components/ImagesPage/ImagesPage";

import NoMatch from "./components/NoMatch/NoMatch";
import PostsPage from "./components/PostsPage/PostsPage";
import PostDetail from "./components/PostsPage/PostDetail";
import AlbumsPage from "./components/AlbumsPage/AlbumsPage";
import AllAlbumPictures from "./components/AlbumsPage/AllAlbumPictures";
import Login from "./components/Login/Login";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <div className="text-center">
        <Router>
          <Switch>
          
              <Route exact path="/" component={Welcome}></Route>
              <PrivateRoute path="/home" >
                <HomePage></HomePage>
              </PrivateRoute>
              <Route  path="/login" component={Login}></Route>
              <Route  path="/image" component={ImagesPage}></Route>
              <Route  path="/postPage" component={PostsPage}></Route>
              <Route  path="/post/:postId" component={PostDetail}></Route>
              <Route  path="/albumPage" component={AlbumsPage}></Route>
              <Route  path="/album/userId/:albumId" component={AllAlbumPictures}></Route>
              <Route  path="*" component={NoMatch}></Route>
                            
          </Switch>
        </Router>
        </div>
    </UserContext.Provider>
  );
}

export default App;
