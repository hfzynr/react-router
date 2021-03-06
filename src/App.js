import React from 'react';
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import './App.css';
import { Home , About, User , CenteredTabs, SignInSide, NestedUser, SignUp} from './components'

function App() {
  return (
    <Router>
        <CenteredTabs />
        <Switch>
          <Route path="/about" >
            <About />
          </Route>
          <Route path="/user" exact={true}>
            <User />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/user/:id">
            <NestedUser />
          </Route>
          <Route path="/signin" >
            <SignInSide />
          </Route>
          <Route path="/" exact={true} >
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;

//pada line 31, untuk parent, harus menggunakan exact