import React from 'react';
import ReactDOM from "react-dom";

import { MoralisProvider } from "react-moralis";
import { useMoralis } from "react-moralis";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useState, useRef, useEffect  } from 'react';

import Navbar1 from './components/Navbar1';
import Welcome from './pages/welcome';
import Contests from './pages/contests';
import Admin from './pages/Admin';

import IndividualContest from './pages/individualcontest';

const App = () => {

    // const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    // useEffect(() => {
    //     if (isAuthenticated) {
    //     // add your logic here
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [isAuthenticated]);

    // const login = async () => {
    //   if (!isAuthenticated) {

    //     await authenticate({signingMessage: "Log in using Moralis" })
    //       .then(function (user) {
    //         console.log("logged in user:", user);
    //         console.log(!user.get("ethAddress"));
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }
    // }

    // const logOut = async () => {
    //   await logout();
    //   console.log("logged out");
    // }

    return (
        <>
            <Router>
                <MoralisProvider appId="wlzRrvHDWBuWvZhmBD1zIelwKOuIHHqppirPd3VA" serverUrl="https://s2ni7eolynpx.usemoralis.com:2053/server"> 
                    <Navbar1 />
                
                    <Routes>
                        <Route exact path='/' element={<Welcome />} />
                        <Route exact path='/contests' element={<Contests/>} />
                        {/* <Route exact path='/marketplace' element={<Marketplace/>} /> */}
                        <Route exact path='/individualcontest' element={<IndividualContest/>} />
                        <Route exact path='/Admin' element={<Admin />} />
                    
                    </Routes>

                    {/* <div>
                        <h1>Moralis Hello World!</h1>
                        <button onClick={login}>Moralis Metamask Login</button>
                        <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
                    </div> */}

                </MoralisProvider>
            </Router>

        </>
    );
}
 
export default App;