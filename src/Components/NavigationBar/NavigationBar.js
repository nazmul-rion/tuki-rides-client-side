import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import { useHistory, NavLink } from 'react-router-dom'
import logo from '../../images/logo.png'

const NavigationBar = () => {
    const history = useHistory();
    const { user, signOutUser } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>
                    <NavLink className="text-decoration-none" to="/">

                        <Navbar.Brand>
                            <img
                                alt="logo"
                                src={logo}
                                width="55"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Tuki Rides
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavLink className="nav-link" to="/myorders">My Orders</NavLink>
                            <NavLink className="nav-link" to="/explore-all">Explore All</NavLink>
                            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>

                        </Nav>

                        {user.displayName ? (
                            <>
                                <Navbar.Text>
                                    <img className="rounded rounded-circle" height="40" width="40" src={user.photoURL} alt="N/A" />
                                    <b className="mx-3">{user.displayName}</b>
                                    <Button variant="danger" onClick={signOutUser}>Sign Out <i className="fas fa-sign-out-alt"></i></Button>{' '}
                                </Navbar.Text>
                            </>
                        ) : (
                            <>
                                <Navbar.Text>
                                    <div className="d-flex">
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signin')}>Sign In</Button>{' '}
                                        <Button className="custom-button" variant="dark" onClick={() => history.push('/signup')}>Sign Up</Button>{' '}
                                    </div>
                                </Navbar.Text>
                            </>
                        )}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavigationBar
