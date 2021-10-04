import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Header.css'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#"><span>
                    NEBULAS IT</span><br />
                    <small>For professional Skill Development</small>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <Nav.Link href="#action2">All Courses</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Contact Us</Nav.Link>
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
        </Navbar>
    );
};

export default Header;