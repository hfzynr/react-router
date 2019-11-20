import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import './App.css';
import { Home , About, User, NestedUser, Users , CenteredTabs, SignInSide, SignUp} from './components'

function App() {
  return (
    <Router>
        <CenteredTabs />
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/user" >
            <User />
          </Route>
          <Route path="/home" exact={true}>
            <Home />
          </Route>
          <Route path="/user" exact={true}>
            <Users />
          </Route>
          <Route path="/user/:name">
            <NestedUser />
          </Route>
          <Route path="/signin" >
            <SignInSide />
          </Route>
          <Route path="/" >
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

//pada line 31, untuk parent, harus menggunakan exact