import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import WorkSpace from './components/Workspace';
import Signup from './components/Signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <WorkSpace />
        {/* <Signup /> */}
      
      </div>
    </div>
  );
}

export default App;
