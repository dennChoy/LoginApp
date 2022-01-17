import React from 'react';

import classes from './Input.module.css';

const Input = props => {
    return(
        <div className={`${classes.control} ${props.isValid === false ? classes.invalid : ''}`}>
            <label htmlFor='username'>{props.label}</label>
            <input 
                id={props.id}
                type={props.type}
                onChange={props.onChange}
                onBlur={props.onBlur}
                value={props.value}
            />
        </div>
    );
}

export default Input;