import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CryptoCards, Button } from '@web3uikit/core';
import { ConnectButton } from '@web3uikit/web3';
import { MoralisProvider } from "react-moralis";


const imgstyle = {
  'padding-left': 20,
};

function App() {
  return (
    <div className="App">
          <Navbar classname="" bg="dark" variant="dark">
          <Navbar.Brand  href="#home">
            <img style={imgstyle}
              src="https://mellody.art/wp-content/uploads/2022/05/Logo-Branco-Mellody-1-e1652910561504.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          
          <Nav className="mx-auto">
          <Nav.Link href="#pricing">Cart</Nav.Link>
            
           <Nav.Link href="#features">Marketplace</Nav.Link>
            <Nav.Link href="#features">Contests</Nav.Link>
            <Nav.Link href="#pricing">Account</Nav.Link>
            <Nav.Link href="#pricing">Cart</Nav.Link>
          </Nav>
          <ConnectButton />
      </Navbar>
    

   
    </div>
  );
}

export default App;
