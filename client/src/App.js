import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Landing from './components/Landing/Landing';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
import Dashboard from './components/UI/Dashboard/Dashboard';
import CreateProfile from './components/CreateProfile/CreateProfile';
import EditProfile from './components/EditProfile/EditProfile';
import AddExperience from './components/EditProfile/AddExperience/AddExperience';
import AddEducation from './components/EditProfile/AddEducation/AddEducation';
import Profiles from './components/Profiles/Profiles';
import Profile from './components/Profile/Profile';
import NotFound from './components/NotFound/NotFound';
import Posts from './components/Posts/Posts';
import Post from './components/Post/Post';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Route 
            exact 
            path="/" 
            component={Landing} />
          <Route 
            exact 
            path="/login" 
            component={Login} />
          <Route 
            exact 
            path="/register" 
            component={Register} />
          <Route 
            exact 
            path="/profiles" 
            component={Profiles} />
          <Route 
            exact 
            path="/profile/:handle" 
            component={Profile} />
          <Switch>
            <PrivateRoute 
              exact 
              path="/dashboard" 
              component={Dashboard} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/create-profile" 
              component={CreateProfile} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/edit-profile" 
              component={EditProfile} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/add-experience" 
              component={AddExperience} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/add-education" 
              component={AddEducation} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/feed" 
              component={Posts} />
          </Switch>
          <Switch>
            <PrivateRoute 
              exact 
              path="/post/:id" 
              component={Post} />
          </Switch>

          <Route 
            exact 
            path="/not-found" 
            component={NotFound} />
        </Layout> 
      </div>
    );
  }
}

export default App;
