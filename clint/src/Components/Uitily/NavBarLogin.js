import React from 'react'
import { Navbar, Container, FormControl, Nav, Form, Button } from 'react-bootstrap'
import logo from '../../images/logo.png'
import login from '../../images/login.png'
import cart from '../../images/cart.png'
const NavBarLogin = () => {
    return (

        <Navbar expand="lg" className="sticky-top" bg="dark" variant="dark"  >
            <Container  >
                <Navbar.Brand href="#"> <a href='/'>
                    <img src={logo} className='logo' />
                </a></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href='/login'
                            className="nav-text d-flex mt-3 justify-content-center">
                            <img src={login} className="login-img" alt="sfvs" />
                            <p  >lgoin</p>
                        </Nav.Link>

                        <Nav.Link href='/cart'
                            className="nav-text d-flex mt-3 justify-content-center"
                        >
                            <img src={cart} className="login-img" alt="sfvs" />
                            <p  >cart</p>
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarLogin
