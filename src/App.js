import React from 'react';
import IssueList from './components/issueList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub Issues</h1>
      </header>
      <div>
        <IssueList />
      </div>
    </div>
  );
}

export default App;
