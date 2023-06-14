import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


class header extends React.Component{
 
    render(){
        return (
            <div>
              
            <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My web page</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="/personalinfo">Personal info</NavDropdown.Item>
              <NavDropdown.Item href="/mysocialmedia">
                My social media
              </NavDropdown.Item>
              <NavDropdown.Item href="/converter">Converter</NavDropdown.Item>
              <NavDropdown.Item href="/dicegame">
                Dice game
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
            </div>
        )
    }


}

export default header;