import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Header.css'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, Stack } from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    return (

        <Navbar className='navbar' expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><span className="neb">
                    NEBULAS IT</span><br />
                    <small>For professional Skill Development</small>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{
                            // maxHeight: '100px',
                            fontSize: '25px',

                        }}
                        navbarScroll
                    >

                        <Stack direction="horizontal" gap={5}>
                            <NavLink
                                to="/home"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                    fontSize: '30px'

                                }}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                    fontSize: '30px'
                                }}
                            >
                                About Us
                            </NavLink>
                            <NavLink
                                to="/allcourse"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                    fontSize: '30px'
                                }}
                            >
                                All Courses
                            </NavLink>
                            <NavLink
                                to="/contact"
                                activeStyle={{
                                    fontWeight: "bold",
                                    color: "red",
                                    textDecoration: 'none',
                                    fontSize: '30px'
                                }}
                            >
                                Contact Us
                            </NavLink>
                        </Stack>



                        <NavDropdown title="  Services" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">IT TRAINING</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">SOFTWARE DEVELOPMENT</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                DIGITAL MARKETING
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                IT CONSULTANCY
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                NETWORK SOLUTION
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                COMPUTER EQUIPMENT SUPPLIERS
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                SEO TRAINING COURSE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                CCNA TRAINING COURSE
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action5">
                                IT RESOURSE REQUREMENT
                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;