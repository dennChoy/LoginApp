import React, { useContext } from 'react';
import MainHeader from './components/Header/MainHeader';
import Home from './components/Home/Home';
import Loggin from './components/Login/Loggin';
import AuthContext from './store/auth-context';


function App() {
  
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Loggin/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
    </React.Fragment>
    
  );
}

export default App;
