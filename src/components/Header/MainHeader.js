import React from 'react';
import classes from "./MainHeader.module.css";
import Navigation from './Navigation';

const MainHeader = (props)=> {
    return(
        <header className={classes.header}>
            <h2 className={classes.title}>LogginApp</h2>
            {props.isAuthenticated && (<Navigation onLogout={props.onLogout}/>)}
        </header>
    );
}

export default MainHeader;