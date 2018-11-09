import React from 'react';
import Note from './Note';

export default (props) => (
    <ul>{props.notes.map(({id, task}) => 
        <li key={id}>
            <Note 
                task={task} 
                onDelete={props.onDelete.bind(null,id)}
            />
        </li>)}
    </ul>
)