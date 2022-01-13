import React from 'react';
import Card from '../UI/Cards/Card';
import Button from '../UI/Buttons/Button';

import classes from './Loggin.module.css';

const Loggin = (props) => {
    const onSubmit = (event) =>{
        event.preventDefault();
        props.onLoggin();
    }

    const emailIsValid = true;
    const passwordlIsValid = true;
    const formIsValid = true;
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
                <div className={classes.actions}>
                    <Button type={"submit"} className={classes.btn} disabled={!formIsValid}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default Loggin;