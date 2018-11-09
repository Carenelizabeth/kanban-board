import React from 'react';
import Notes from './Notes';
import './App.css';

import uuidv4 from 'uuid';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      notes: [
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
    };
  }
  render() {
    const {notes} = this.state;
    return (
      <div className="App">
        <Notes notes={notes}/>
        <button onClick={() => console.log('add note')}>+</button>
      </div>
    );
  }
}

export default App;
