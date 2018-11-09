import React from 'react';
import Note from './Note';

export default (props) => (
    <ul>{props.notes.map(({id, task}) => 
        <li key={id}>
            <Note> 
                <span>{task}   </span> 
                <button onClick={props.onDelete.bind(null,id)}>x</button>
            </Note>
        </li>)}
    </ul>
)