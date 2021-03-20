import React from 'react';
import { Link} from "react-router-dom";
import { 
    Nav,
    Navbar,
    NavItem,
    NavbarBrand,
    Container


} from 'reactstrap';

function Header() {
    return (
        <>
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">Engineer Team</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link to='/adduser' className="btn btn-primary">Add User</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
            
        </>
    )
}

export default Header
