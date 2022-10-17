import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoralisProvider } from "react-moralis";

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Navbar2 from './components/Navbar2';
import Welcome from './pages/welcome';
import Contests from './pages/contests';

const App = () => {
    return (
        <>
            <Router>
            <MoralisProvider appId="wlzRrvHDWBuWvZhmBD1zIelwKOuIHHqppirPd3VA" serverUrl="https://s2ni7eolynpx.usemoralis.com:2053/server"> 
                <Navbar2 />
            </MoralisProvider>
                <Routes>
                    <Route exact path='/' element={<Welcome />} />
                    <Route path='/contests' element={<Contests/>} />
                
                </Routes>
            </Router>
        </>
    );
}
 
export default App;