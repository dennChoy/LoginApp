import React, { useEffect, useRef, useState } from 'react';
import Card from '../UI/Cards/Card';
import Button from '../UI/Buttons/Button';

import classes from './Loggin.module.css';

const Loggin = (props) => {
    const [formIsValid, setFormValid] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [emailIsValid, setEmailIsValid] = useState();
    const [passwordlIsValid, setPasswordIsValid] = useState();

    useEffect(()=>{
        const identifier = setTimeout(()=>{
            console.log("cheking form valid...");
            setFormValid(
                username.includes('@') && password.trim().length > 6
                );
        }, 500);
        return(()=>{
            console.log("CLEANUP");
            clearTimeout(identifier);
        });
    }, [username, password]);
    
    const changeUserHandler = (event) =>{
        setUsername(event.target.value);
        
    };

    const changePasswordHandler = (event) => {
        setPassword(event.target.value);

    }
    
    const validateUsername = () => {
        setEmailIsValid(username.includes('@'))
    }

    const validatePassword = ()  => {
        setPasswordIsValid(password.trim().length > 6);
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        props.onLoggin();
    }
    

    return(
        <Card className={classes.login}>
            <form onSubmit={onSubmit}>
                <div className={`${classes.control} ${emailIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor='username'>User</label>
                    <input id='username' type='text' onChange={changeUserHandler} onBlur={validateUsername}/>
                </div>
                <div className={`${classes.control} ${passwordlIsValid === false ? classes.invalid : ''}`}>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='password'  onChange={changePasswordHandler} onBlur={validatePassword}/>
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