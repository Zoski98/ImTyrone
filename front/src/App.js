import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import AdminPrivateRoute from './AdminPrivateRoute';
import axios from 'axios';
import Page403 from './pages/Errors/Page403';
import Page404 from './pages/Errors/Page404';
import CreateW from './components/Admin/createW';
import CreateC from './components/Admin/createC';
import CreateF from './components/Admin/createF';
import UserPrivateRoute from './UserPrivateRoute';
import Logreg from './pages/Home/logreg';
import UserHome from './pages/user/section';
import createU from './components/Admin/createU';
import AdminHome from './pages/admin/AdminHome';
import ShowPost from './pages/user/showPostUser';
import Chat from './pages/user/chat';
import Useres from './pages/newAdmin/useres';
import Worlds from './pages/newAdmin/worlds';
import ShowAdmin from './pages/newAdmin/showPostAdmin';
import Communities from './pages/newAdmin/communities';
import Feeds from './pages/newAdmin/feeds';
import NewCommunity from './pages/user/NewCommunity';
import NewWorld from './pages/user/NewWorld';
import Profile from './pages/user/profile';
import EditUsers from './components/Admin/ChangeUser';
import EditUser from './pages/user/EditUser';
import Feed from './pages/user/Newfeed';
import ChatUser from './pages/user/chatUser';


axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'multipart/form-data';
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

        {/* ADMIN-ROUTES */}
        <AdminPrivateRoute path='/admin' component={AdminHome} name="admin" />

        <AdminPrivateRoute path="/world" component={Worlds} />
        <AdminPrivateRoute path="/community" component={Communities} />
        <AdminPrivateRoute path="/feed" name="admin-feed" component={Feeds} />
        <AdminPrivateRoute path="/useres" name="admin-user" component={Useres} />

        <AdminPrivateRoute path='/create/world/post' component={CreateW} />
        <AdminPrivateRoute path='/create/feed/post' component={CreateF} />
        <AdminPrivateRoute path='/create/community/post' component={CreateC} />
        <AdminPrivateRoute path='/create/user' component={createU} />

        <AdminPrivateRoute path='/show-post/:id' component={ShowAdmin} />
        <AdminPrivateRoute path='/edit-user/:id' component={EditUsers} />
        <AdminPrivateRoute path='/delete-user/:id' component={Useres} />


        {/* USER ROUTES */}
        <UserPrivateRoute path="/section" name="user" component={UserHome} />
        <UserPrivateRoute path="/users/community" name="userC" component={NewCommunity} />
        <UserPrivateRoute path="/users/world" component={NewWorld} />
        <UserPrivateRoute path="/users/feed" name="admin-feed" component={Feed} />
        <UserPrivateRoute path="/users/profile" name="profile" component={Profile} />
        <UserPrivateRoute path='/show/post/:id' component={ShowPost} />
        <UserPrivateRoute path='/edit/user/:id' component={EditUser} />
        <UserPrivateRoute path='/chat' component={Chat}/>
        <UserPrivateRoute path='/:id' component={ChatUser}/>

        <Route path="/403" component={Page403} />
        <Route path="/404" component={Page404} />

       



      </Switch>
    </Router>
  );
}

export default App;
