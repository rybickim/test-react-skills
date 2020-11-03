import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './user/User';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/user/:id">
              <User>some user</User>
            </Route>
            <Route path="/">
              <User>user</User>
            </Route>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
