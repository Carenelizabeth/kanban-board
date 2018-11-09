import React from 'react';

export default(props) => {
    if(props.editing){
        return 
            <Edit 
               value={props.value} 
               onEdit={props.onEdit}
               {...props}
            />
    }
    return
        <span {...props}>value: {props.value}</span>;
}

const Edit = ({onEdit = () => {}, value, ...props}) => (
    <div onClick={onEdit}{...props}>
        <span>edit: {value}</span>
    </div>
);