import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return(
        <div>
            <img alt='Header' src="https://i.pinimg.com/originals/3f/5c/49/3f5c4996fab56e32fdbf3db1d4a0ffe9.jpg" height="200px" width="100%"/>
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Torneos" id="basic-nav-dropdown">
                            <NavDropdown.Item href="femenino">Femenino</NavDropdown.Item>
                            <NavDropdown.Item href="masculino">Masculino</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#reglamento">Reglamento</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;