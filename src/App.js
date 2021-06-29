import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/about">
          <h2>About Neil</h2>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
