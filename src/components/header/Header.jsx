import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export function Header({ isLogged, logoutHandler }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Offers
          </Link>

          {!isLogged ? (
            <Link to="/login" className="nav-link">
              Login
            </Link>
          ) : (
            <>
              <Link to={`/user/${isLogged.id}`} className="nav-link">
                My profile
              </Link>
              <Link to="/rentals/add" className="nav-link">
                Add Offer
              </Link>
              {isLogged.isAdmin && (
                <>
                  <Link to="/users" className="nav-link">
                    Users
                  </Link>
                  <Link to="/users/add" className="nav-link">
                    Add User
                  </Link>
                </>
              )}
              <Link className="nav-link" onClick={logoutHandler}>
                Logout
              </Link>
            </>
          )}
        </Nav>
        <Container className="justify-content-center">
          <Navbar.Brand className="mx-auto">
            <Link to="/">
              <img src={Logo} height="60%" alt="HomeFinder Logo" />
            </Link>
          </Navbar.Brand>
        </Container>
      </Container>
    </Navbar>
  );
}
