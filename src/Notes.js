import React from 'react';
import Note from './Note';
import Editable from './Editable';

export default function Notes(props){
    return(
        <ul>{props.notes.map(({id, editing, task}) => 
            <li key={id}>
                <Note onClick={props.onNoteClick.bind(null, id)}> 
                <Editable
                        editing={editing}
                        value={task}
                        onEdit={props.onEdit.bind(null, id)}
                />
                    <button onClick={props.onDelete.bind(null,id)}>x</button>
                </Note>
            </li>)}
        </ul>
    )
}