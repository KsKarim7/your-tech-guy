import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import guy from '../../../images/favicon.jpg'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    const style = {
        width: "14%",
        marginRight: '5px'
        // marginTop: "-10px"
    }
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/home'><img style={style} src={guy} alt="" />Your Tech Guy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto pe-5">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link href="home#services">Courses</Nav.Link>
                            <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
                            <Nav.Link href='/' >Reviews</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <Nav.Link onClick={handleSignOut}>
                                        Log Out
                                    </Nav.Link>
                                    :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;