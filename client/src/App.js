import React, { Component } from 'react';
import Home from './component/Home'
import NoMatch from './component/NoMatch'
import Navbar from './component/Navbar'
import Login from './component/Login'
import MyFriends from './component/MyFriends'
import FetchUser from './component/FetchUser'
import ProtectedRoute from './component/ProtectedRoute';
import Register from './component/Register'
import { Switch, Route, } from 'react-router-dom'
import { Container, } from "semantic-ui-react"

const App = () => (
  <>
    <FetchUser>
      <Navbar />
      <Container>
        <Switch>
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/my_friends" component={MyFriends} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route omponent={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)



export default App;
