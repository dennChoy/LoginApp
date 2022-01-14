import React, { useEffect, useState } from 'react';
import MainHeader from './components/Header/MainHeader';
import Home from './components/Home/Home';
import Loggin from './components/Login/Loggin';

function App() {
  const [isLoggedIn, setLoggin] = useState(false);

  useEffect(()=>{
    const storedUserLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storedUserLoggedInInfo === '1'){
      setLoggin(true);
    }
  }, []);

  const loginHandler = ()=>{
    setLoggin(true);
    localStorage.setItem('isLoggedIn', '1');
  }

  const logoutHandler = () => {
    setLoggin(false);
    localStorage.setItem('isLoggedIn', '0');
    localStorage.removeItem('isLoggedIn');
  }

  return (
    <React.Fragment>
      <MainHeader onLogout={logoutHandler} isAuthenticated={isLoggedIn} />
      <main>
        {!isLoggedIn && <Loggin onLoggin={loginHandler}/>}
        {isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
    
  );
}

export default App;
