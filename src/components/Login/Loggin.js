import React from 'react';
import Card from '../UI/Cards/Card';

import classes from './Loggin.module.css';

const Loggin = () => {
    const onSubmit = (event) =>{
        event.preventDefault();
    }

    const emailIsValid = true;
    const passwordlIsValid = true;
    return(
        <Card className={classes.login}>
            <form onSubmit={onSubmit}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor='username'>User</label>
                    <input id='username' type='text'/>
                </div>
                <div className={`${classes.control} ${passwordlIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password'/>
                </div>
                    <button type="submit">Loggin</button>
                
            </form>
        </Card>
    );
}

export default Loggin;