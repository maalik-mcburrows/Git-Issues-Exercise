import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IssueList from './components/issueList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={IssueList} />
      </Router>
    </div>
  );
}

export default App;
