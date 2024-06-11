import React from 'react';
import { Navbar, Nav, Button, Form, FormControl, Dropdown, Container } from 'react-bootstrap';
import MegaMenu from './megaMenu';

const HeaderSearch = () => {

    const handleToggleClick = () => {
        window.location.href = "/your-redirect-page";  // Replace with your desired URL
    };
    return (
        <Navbar className="header-main">
            <Container>
                <Nav className="mr-auto">
                    <Button variant="dark" className="toggle-button" >SHOP BABY</Button>
                    <Button variant="outline-dark" onClick={handleToggleClick} className="toggle-button">MEDICAL EQUIPMENT</Button>
                </Nav>
                <div className='d-flex align-items-center'>
                    <MegaMenu />
                    <Form className="ml-auto search-form">
                        <FormControl type="text" placeholder="Search products ..." className="search-input" />
                    </Form>
                </div>
            </Container>
        </Navbar>
    );
}

export default HeaderSearch;