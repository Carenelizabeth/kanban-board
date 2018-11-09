import React from 'react';
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

export default () => (
    <ul>{notes.map(note => 
        <li key={note.id}>{note.task}</li>)}
    </ul>
)