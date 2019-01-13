import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute/PrivateRoute';
import './App.css';

import Layout from './hoc/Layout/Layout';
import Landing from './containers/Landing/Landing';
import Login from './containers/Auth/Login/Login';
import Register from './containers/Auth/Register/Register';
import Dashboard from './containers/UI/Dashboard/Dashboard';
import CreateProfile from './containers/CreateProfile/CreateProfile';
import EditProfile from './containers/EditProfile/EditProfile';
import AddExperience from './containers/EditProfile/AddExperience/AddExperience';
import AddEducation from './containers/EditProfile/AddEducation/AddEducation';
import Profiles from './containers/Profiles/Profiles';
import Profile from './containers/Profile/Profile';
import NotFound from './containers/NotFound/NotFound';
import Posts from './containers/Posts/Posts';

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
