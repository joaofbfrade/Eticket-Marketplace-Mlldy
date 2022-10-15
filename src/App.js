import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CryptoCards, Button } from '@web3uikit/core';
import { ConnectButton } from '@web3uikit/web3';
import { MoralisProvider } from "react-moralis";

function App() {
  return (
    <div className="App">
          <Navbar bg="light" variant="light">
       
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            
            
           <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <ConnectButton />
      </Navbar>
    

   
    </div>
  );
}

export default App;
