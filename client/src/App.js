import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import OtherPage from './OtherPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/other-page">Other Page</Link>
        </div>
        <div>
          <Route exact path="/" component={Fib} />
          <Route path="/other-page" component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
