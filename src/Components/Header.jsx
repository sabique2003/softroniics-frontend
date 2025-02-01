import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <Navbar bg="primary" expand="lg" className='p-3'>
      <Navbar.Brand href="/">SPFTRONIICS</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {auth.isAuthenticated ? (
            <>
              <LinkContainer to="/dash">
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/profile">
                <Nav.Link>Profile</Nav.Link>
              </LinkContainer>
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </>
          ) : (
            <LinkContainer to="/">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
