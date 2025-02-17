import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ConnectButton } from '@web3uikit/web3';

const imgstyle = {
    'paddingLeft': 20,
  };
  
  const expand = 'md';


const Footer = () => {
    return (
        <>
       
          <Navbar key={expand} fixed="bottom" bg="dark"  variant="dark" expand={'md'} >
            <Container fluid>
            <Navbar.Brand  href="#home">
                <img style={imgstyle}
                  src="https://mellody.art/wp-content/uploads/2022/05/Logo-Branco-Mellody-1-e1652910561504.png"
                  width="100"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  
                  <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  
                  <Nav.Link href="#features">Marketplace</Nav.Link>
                <Nav.Link href="#features">Contests</Nav.Link>
                
                   
                  </Nav>
                  
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            
            </Container>
          </Navbar>
        
      </>
    );
}
 
export default Footer;