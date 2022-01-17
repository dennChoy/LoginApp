import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, pass) => {},
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(()=>{
        const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
        if(storedUserLoggedInInfo === '1'){
            setIsLoggedIn(true);
        }
    }, []);
    

    const logoutHandler = () =>{
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
    }

    const loginHandler = () => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
    }

    return <AuthContext.Provider 
                value={{
                    isLoggedIn:isLoggedIn, 
                    onLogin:loginHandler, 
                    onLogout: logoutHandler
                }}>
                    {props.children}
                </AuthContext.Provider>;
}

export default AuthContext;