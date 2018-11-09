import React, { Component } from 'react';
import Notes from './Notes';
import './App.css';

import uuidv4 from 'uuid';

const notes = [
    {
        id: uuidv4(),
        task: 'Learn React'
    },
    {
        id: uuidv4(),
        task: 'Do Laundry'
    },
    {
        id: uuidv4(),
        task: 'Find a job'
    }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Notes notes={notes}/>
        <button onClick={() => console.log('add note')}>+</button>
      </div>
    );
  }
}

export default App;
