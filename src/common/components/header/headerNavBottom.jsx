import { Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const HeaderNavBottom = ({ isDesktop = true, toggleDrawer }) => {
    return (
        <Container style={{ maxWidth: '463px' }}>
            <Nav className={`${isDesktop ? 'app-main-bottom-navbar' : 'app-bottom-navbar-mobile flex-column'}`} variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink to="/erviceArea" className='nav-link' onClick={toggleDrawer}>Top Sellers</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/serviceAreas" className='nav-link' onClick={toggleDrawer}>Registry favorites</NavLink>
                </Nav.Item>
                <Nav.Item>
                    <NavLink to="/aboutUs" className='nav-link' onClick={toggleDrawer}>Shop by trimester</NavLink>
                </Nav.Item>
            </Nav>
        </Container>

    );
}

export default HeaderNavBottom;