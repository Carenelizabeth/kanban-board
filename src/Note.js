import React from 'react';

export default (props) => (
    <div>
        <span>{props.task}    </span>
        <button onClick={props.onDelete}>x</button>
    </div>
)