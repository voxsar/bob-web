import { Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const HeaderNav = ({ isDesktop = true, toggleDrawer }) => {
    return (

        <Container style={{ padding: '0px 0px 50px 0px'}}>
            <Nav className='app-main-navbar-cmp' variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink to="/" className='nav-link' onClick={toggleDrawer}>Home</NavLink>
                </Nav.Item>
                <div className="nav-item-hover">
                    <NavDropdown className='nav-item-main' title="Shop" id="nav-dropdown">
                        <NavDropdown.Item eventKey="4.1">Baby Health and Safety</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.2">Bath and Potty</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.3">Breastfeeding</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.4">Clothing and Accessories</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.5">Gear</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.6">HSA/FSA Approved Items</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.7">Maternity and Postpartum</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.8">Meal Time</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.9">Nursery Furniture and Sleep</NavDropdown.Item>
                        <NavDropdown.Item eventKey="4.10">Toys and Play</NavDropdown.Item>
                    </NavDropdown>
                </div>
                <Nav.Item>
                    <NavLink to="/serviceAreas" className='nav-link' onClick={toggleDrawer}>FSA/HSA Approved Items</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/aboutUs" className='nav-link' onClick={toggleDrawer}>Nursery Design Center</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/contactUs" className='nav-link' onClick={toggleDrawer}>REGISTRIES</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/blogs" className='nav-link' onClick={toggleDrawer}>BOB Defenders</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/event-spaces" className='nav-link' onClick={toggleDrawer}>event spaces</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/estimateTow" className='nav-link' onClick={toggleDrawer}>About us</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/privacyPolicy" className='nav-link' onClick={toggleDrawer}>Contact us</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/estimateTow" className='nav-link' onClick={toggleDrawer}>FAQ</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/estimateTow" className='nav-link' onClick={toggleDrawer}>Blog</NavLink>
                </Nav.Item>
            </Nav>
        </Container>

    );
}

export default HeaderNav;