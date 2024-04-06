import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../services/users-service';

export function Header() {
  const loggedUser = getLoggedUser();

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/rentals/add" className="nav-link">
            Add Offer
          </Link>
          {!loggedUser && (
            <Link to="/login" className="nav-link">
              Login
            </Link>
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
