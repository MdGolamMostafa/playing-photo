import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link} from 'react-router-dom';
// import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    return (
        <Container>
            <Navbar expand="lg" className="pt-4 text-primary">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} className="px-4 text-white" to="/image">Image</Nav.Link>
                            <Nav.Link as={Link} className="px-4 text-white" to="/">News</Nav.Link>
                            <Nav.Link as={Link} className="px-4 text-white" to="/">Destination</Nav.Link>
                            <Nav.Link as={Link} className="px-4 text-white" to="/">Blog</Nav.Link>
                            <Nav.Link as={Link} className="px-4 text-white" to="/">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;