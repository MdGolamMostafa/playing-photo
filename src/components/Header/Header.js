import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
// import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" className="pt-4 text-primary">
                <Navbar.Brand as={Link} to="/">
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link as={Link} className="px-4" to="/">News</Nav.Link>
                        <Nav.Link as={Link} className="px-4" to="/">News</Nav.Link>
                        <Nav.Link as={Link} className="px-4" to="/">Destination</Nav.Link>
                        <Nav.Link as={Link} className="px-4" to="/">Blog</Nav.Link>
                        <Nav.Link as={Link} className="px-4" to="/">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;