import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import editUser from './pages/EditUser';
import AdminPrivateRoute from './AdminPrivateRoute';
import axios from 'axios';
import Page403 from './pages/Errors/Page403';
import Page404 from './pages/Errors/Page404';
import Users from './pages/admin/Users';
import Community from './pages/admin/Community';
import World from './pages/admin/World';
import Feed from './pages/admin/Feed';
import Show from './pages/show';
import Index from './pages/user/index';
import CreateW from './components/Admin/createW';
import CreateC from './components/Admin/createC';
import CreateF from './components/Admin/createF';
import FeedExampleBasic from './pages/user/feed';
import UserPrivateRoute from './UserPrivateRoute';
import Logreg from './pages/Home/logreg';
import UserHome from './pages/user/section';
import createU from './components/Admin/createU';
import AdminHome from './pages/admin/AdminHome';
import userCommunity from './pages/user/userCommunity';
import ShowU from './pages/user/showU';



axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});




function App() {

  return (

    <Router>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path="/getin">
          <Logreg />
        </Route>

        <AdminPrivateRoute path='/admin' component={AdminHome} name="admin"/>
        <AdminPrivateRoute path="/world" component={World} />
        <AdminPrivateRoute path="/community" component={Community} />
        <AdminPrivateRoute path="/feed" name="admin-feed" component={Feed} />
        <AdminPrivateRoute path="/users" name="admin-user" component={Users} />

        <AdminPrivateRoute path='/create/world/post' component={CreateW} />
        <AdminPrivateRoute path='/create/feed/post' component={CreateF} />
        <AdminPrivateRoute path='/create/community/post' component={CreateC} />
        <AdminPrivateRoute path='/create/user' component={createU} />

        <AdminPrivateRoute path='/show-post/:id' component={Show} />
        <AdminPrivateRoute path='/edit-user/:id' component={editUser} /> 
   
       
        


        {/* USER ROUTES */}

        <Route path='/user/feed'><FeedExampleBasic /></Route>
        <UserPrivateRoute path="/section" name="user" component={UserHome} />
        <UserPrivateRoute path="/user/community" name="userC" component={userCommunity} />
        <UserPrivateRoute path="/user/world"/>
        <UserPrivateRoute path="/user/feed" name="admin-feed"/>
        <UserPrivateRoute path='/create/world/user/post' component={CreateW} />
        <UserPrivateRoute path='/create/feed/user/post' component={CreateF} />
        <UserPrivateRoute path='/create/community/user/post' component={CreateC} />
        <UserPrivateRoute path='/user/show/post/:id' component={ShowU} />

        <Route path='/user/index'><Index /></Route>
        <Route path="/403" component={Page403} />
        <Route path="/404" component={Page404} />

    
      </Switch>
    </Router>
  );
}

export default App;
