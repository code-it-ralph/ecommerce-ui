/* Bootstrap */
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

/* React */
import { Fragment, useState, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import UserContext from '../UserContext';
import Cart from '../pages/Cart';


export default function AppNavbar() {

    const { user } = useContext(UserContext);

    return (
        <Navbar bg="transparent" expand="lg" className='animate__animated animate__slideInDown'>
            <Container>
                <Navbar.Brand as={Link} to="/"><i className="fas fa-book-open" /> YourBooks</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/library">Library</Nav.Link>


                        {(user.isAdmin === true) ?
                            <Fragment>
                                <Nav.Link as={NavLink} to="/admin">Dashboard</Nav.Link>
                                <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                            </Fragment>
                            : (user.id !== null) ?
                                <Fragment>
                                    <Nav.Link as={NavLink} to="/cart">Cart</Nav.Link>
                                    <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
                                </Fragment>
                                :
                                <Fragment>
                                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                                </Fragment>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

