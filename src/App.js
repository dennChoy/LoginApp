import React, { useState } from 'react';
import MainHeader from './components/Header/MainHeader';
import Home from './components/Home/Home';
import Loggin from './components/Login/Loggin';

function App() {
  const [isLoggedIn, setLoggin] = useState(false);

  const loginHandler = ()=>{
    setLoggin(true);
  }

  const logoutHandler = () => {
    setLoggin(false);
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
