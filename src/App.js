import React from 'react';
import ReactDOM from "react-dom";

import { MoralisProvider } from "react-moralis";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar1 from './components/Navbar1';
import Welcome from './pages/welcome';
import Contests from './pages/contests';


import IndividualContest from './pages/individualcontest';

const App = () => {
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
                
                </Routes>

                </MoralisProvider>
            </Router>
        </>
    );
}
 
export default App;