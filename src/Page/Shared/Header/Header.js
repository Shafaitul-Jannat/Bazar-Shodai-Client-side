import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../Images/logo.png'
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className='sticky-top'>
            <Navbar style={{
                height: '70px'
            }}

                collapseOnSelect expand="lg" bg="dark" variant="dark" >
                <Container >
                    <Navbar.Brand href="#home">
                        <Navbar.Brand as={Link} to="/">
                            <img
                                src={logo}
                                width="150"
                                height="100"
                                className="img-nav d-inline-block align-top"
                                alt=''
                            />
                        </Navbar.Brand>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <Nav.Link href="/manage">Inventory</Nav.Link>

                            {
                                user && <>
                                    <Nav.Link as={Link} to="additem">Add Item</Nav.Link>
                                    <Nav.Link as={Link} to="manage">Manage Item</Nav.Link>
                                    <Nav.Link as={Link} to="myitems">My Items</Nav.Link>
                                </>
                            }


                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>


                            {/* Showing Sign Out */}
                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign out</button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }


                        </Nav>
                        <Nav>

                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="success">Search</Button>
                            </Form>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;