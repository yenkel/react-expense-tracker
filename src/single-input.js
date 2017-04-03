import React, { Component } from 'react';

function SingleInput(props) {
    return (
        <div>
            <label>{props.title}</label> 
            <input type={ props.inputType } 
            placeholder={props.placeholder} 
             onChange={ props.controlFunc }
             value={props.content}
             id={props.id}
           />
        </div>
    );
}

export default SingleInput;
