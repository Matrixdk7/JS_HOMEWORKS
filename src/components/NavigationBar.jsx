import { Navbar, Nav, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { Search } from 'react-bootstrap-icons';
import './navigationBar.css';

const NavigationBar = ({ search, setSearch }) => {
    const location = useLocation();

    return (
        <div className="custom-navbar-container">
            <Navbar variant="dark" expand="lg" className="p-0 w-100">
                <Navbar.Brand as={Link} to="/users" className="navbar-brand-custom">
                    User Manager
                </Navbar.Brand>

                <Nav className="ms-3">
                    <Nav.Link
                        as={Link}
                        to="/users"
                        className={`nav-link-custom ${location.pathname === '/users' ? 'active' : ''}`}
                    >
                        Home
                    </Nav.Link>

                    <Nav.Link
                        as={Link}
                        to="/users/create"
                        className={`nav-link-custom ${location.pathname === '/users/create' ? 'active' : ''}`}
                    >
                        Create User
                    </Nav.Link>
                </Nav>

                <Form className="nav-search ms-auto">
                    <div className="search-wrapper">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                </Form>
            </Navbar>
        </div>
    );
};

export default NavigationBar;