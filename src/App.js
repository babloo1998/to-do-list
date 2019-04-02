import React, { Component } from 'react';
import './App.css';
import Todo from './components/todo'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h2>Wanna add Task?</h2>
       <Todo/>
      </div>
    );
  }
}

export default App;
