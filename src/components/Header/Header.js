import React, { useContext } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link} from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    
    const allData = useSelector((state) =>{
        return state
    }) || {};

    return (
        <Container>
            <Navbar expand="lg" className="pt-4 text-primary">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            {
                                loggedInUser ? (
                                <>
                                    <Nav.Link className="px-4 font-weight-bold text-white" >{loggedInUser.name.split(' ')[0]}</Nav.Link>
                                    <Nav.Link className="px-4 font-weight-bold text-white" >{allData.email}</Nav.Link>
                                </>
                                ) : (
                                    <Nav.Link as={Link} className="px-4 " to="/login"></Nav.Link>
                                )
                                }
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Header;