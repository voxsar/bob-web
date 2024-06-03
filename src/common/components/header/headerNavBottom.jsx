import { Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const HeaderNavBottom = () => {
    return (
        <Container className='mt-4'>
            <Nav className='app-main-bottom-navbar align-items-center justify-content-center' variant="underline" defaultActiveKey="/">
                <Nav.Item>
                    <NavLink to="/serviceArea" className='nav-link'>Top Sellers</NavLink>
                </Nav.Item>
                <Nav.Item style={{ color: '#c7c7c7'}}>|</Nav.Item>
                {/* <Nav.Item>
                    <NavLink to="/serviceAreas" className='nav-link'>Top Registry Products</NavLink>
                </Nav.Item>
                <Nav.Item style={{ color: '#c7c7c7'}}>|</Nav.Item> */}
                <Nav.Item>
                    <NavLink to="/serviceAreas" className='nav-link'>Registry favorites</NavLink>
                </Nav.Item>
                <Nav.Item style={{ color: '#c7c7c7'}}>|</Nav.Item>
                <Nav.Item>
                    <NavLink to="/aboutUs" className='nav-link'>Shop by trimester</NavLink>
                </Nav.Item>
            </Nav>
        </Container>

    );
}

export default HeaderNavBottom;