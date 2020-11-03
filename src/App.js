import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './user/User';
import UserList from './userlist/UserList';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => this.setState({ users: json.slice(0,8) }));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Router>
              <Switch>
                <Route path="/user/:id">
                  <User></User>
                </Route>
                <Route path="/">
                  <UserList users={this.state.users}></UserList>
                </Route>
              </Switch>
            </Router>
          </header>
        </div>
      );
  }
  
}

export default App;
