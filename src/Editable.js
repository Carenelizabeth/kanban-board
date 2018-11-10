import React from 'react';

export default class Editable extends React.Component{

    render(){

    if(this.props.editing){
        return( 
                <div>
                    <Edit 
                    value={this.value} 
                    onEdit={this.onEdit}
                    {...this.props}
                    />
                </div>
            )
    }
    return(
        <span {...this.props}>value: {this.props.value}  </span>
    )
    }
}

/*const Edit = ({onEdit = () => {}, value, ...props}) => (
    <div onClick={onEdit}{...props}>
        <span>edit: {value}   </span>
    </div>
);*/

class Edit extends React.Component{

    checkEnter = (e) => {
        if(e.key === 'Enter'){
            this.finishEdit(e);
        }
    }

    finishEdit = (e) => {
        const value = e.target.value;
        this.logEdit(value)
        if(this.props.onEdit){
            this.props.onEdit(value);
        }
    }

    logEdit = (value) => {
        console.log(value)
    }

    render(){
        const {value, onEdit, ...props} = this.props;

    return( 
        <div>
            <input
                type="text"
                autoFocus={true}
                defaultValue={value}
                onBlur={this.finishEdit}
                onKeyPress={this.checkEnter}
                {...props}
            />
        </div>
        )
    }
}