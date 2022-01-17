import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import Card from '../UI/Cards/Card';
import Button from '../UI/Buttons/Button';
import Input from '../UI/Inputs/Input';

import classes from './Loggin.module.css';
import AuthContext from '../../store/auth-context';


const emailReducer = (state, action) => {
    //console.log(action.type);
    if(action.type === 'USER_INPUT'){
        return {value:action.val, isValid:action.val.includes('@')};
    }

    if(action.type === 'USER_BLUR'){
        return {value:state.value, isValid:state.value.includes('@')};
    }

    return {value:'', isValid:false};
};

const passwordReducer = (state, action) => {
    //console.log(action);
    if(action.type === 'PASSWORD_INPUT'){
        return({value:action.val, isValid:action.val.trim().length>6});
    }

    if(action.type === 'PASSWORD_BLUR'){
        return({value:state, isValid: state.value.trim().length > 6 });
    }

    return {value:'', isValid:false};
}


const Loggin = (props) => {
    const [formIsValid, setFormValid] = useState(false);
    //useing useRedux const [username, setUsername] = useState('');
    //const [password, setPassword] = useState('');
    //using useRedux const [emailIsValid, setEmailIsValid] = useState();
    //const [passwordlIsValid, setPasswordIsValid] = useState();


    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value:'',
        isValid: null
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {value:'', isValid:null});

    const authContext = useContext(AuthContext);
    
    //Objetct destructuring
    const {isValid:emailIsValid} = emailState;
    const {isValid:passwordlIsValid} = passwordState;

    useEffect(()=>{
        const identifier = setTimeout(()=>{
            console.log("cheking form valid...");
            setFormValid(
                emailIsValid && passwordlIsValid
                );
        }, 500);
        return(()=>{
            console.log("CLEANUP");
            clearTimeout(identifier);
        });
    }, [emailIsValid, passwordlIsValid]);
    

    const changeUserHandler = (event) =>{
        //using useRedux setUsername(event.target.value);
        dispatchEmail({type: 'USER_INPUT', val: event.target.value});
    }

    const changePasswordHandler = (event) => {
        //setPassword(event.target.value);
        dispatchPassword({type:'PASSWORD_INPUT', val:event.target.value});

    }
    
    const validateUsername = () => {
        //setEmailIsValid(emailState.isValid)
        dispatchEmail({type:'USER_BLUR'});
    }

    const validatePassword = ()  => {
        //setPasswordIsValid(password.trim().length > 6);
        dispatchPassword({type:'PASSWORD_BLUR'});
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        authContext.onLogin(emailState.value);
    }
    
    /*
    */

    return(
        <Card className={classes.login}>
            <form onSubmit={onSubmit}>
                <Input 
                    id='username' 
                    label='User' 
                    type='text' 
                    isValid={emailIsValid} 
                    value={emailState.value}
                    onChange={changeUserHandler}
                    onBlur={validateUsername}
                />
                <Input 
                    id='password' 
                    label='Password' 
                    type='password' 
                    isValid={passwordlIsValid} 
                    value={passwordState.value}
                    onChange={changePasswordHandler}
                    onBlur={validatePassword}
                />
        
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