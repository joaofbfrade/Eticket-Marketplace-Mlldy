import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { ConnectButton } from '@web3uikit/web3';



import logo from '../assets/LogoDark.png';

const imgstyle = {
  'padding-left': 5,
};

const expand = 'md';

function Navbar2() {
  return (
    <>

      <Navbar key={expand} bg="dark" variant="dark" expand={'md'} >
        <Container fluid>
          <Navbar.Brand href="#home">
            <img style={imgstyle}
              src={"https://mellody.art/wp-content/uploads/2022/05/Logo-Branco-Mellody-1-e1652910561504.png"}
              width="120"
              height="36"
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
                <img style={imgstyle}
                  src={logo}
                  width="100"
                  height="30"
                  className="d-inline-block align-top"
                  alt=""
                />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <Nav className="justify-content-end flex-grow-1 pe-3 ">
                <Form className="d-flex  ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />

                </Form>

                <Nav.Link id="nav" href="/individualcontest">Marketplace</Nav.Link>
                {/* <Nav.Link id="nav" href="/marketplace">Marketplace</Nav.Link> */}
                <Nav.Link id="nav" href="/contests">Contests</Nav.Link>


              </Nav>

              <div id="butao">
                <ConnectButton />
              </div>

            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </>
  );
}

export default Navbar2;
