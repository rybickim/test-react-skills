import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostPage from './postpage/PostPage';
import UserPage from './userpage/UserPage';
import UserList from './userlist/UserList';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [],
      posts: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users?_start=0&_limit=8')
      .then(res => res.json())
      .then(json => this.setState({ users: json }));
  }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <Router>
              <Switch>
                <Route path="/user/:id/:postId" component={PostPage} />
                <Route path="/user/:id" component={UserPage} />
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
