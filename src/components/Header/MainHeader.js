import React from 'react';
import classes from "./MainHeader.module.css";

const MainHeader = (props)=> {
    return(
        <header className={classes.header}>
            <h2 className={classes.title}>LogginApp</h2>
        </header>
    );
}

export default MainHeader;