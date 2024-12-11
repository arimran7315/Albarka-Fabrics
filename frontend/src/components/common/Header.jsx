import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header>
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center">
                        <p>Partnership based on provision of sustainable and innovative textile products</p>
                            <ul className='pt-2'>
                                <li className='border-end'><Link to='https://wa.me/923018668008'><i className="bi bi-whatsapp"></i></Link> </li>
                                <li className='border-end'><Link to='https://www.facebook.com/profile.php?id=61566842366145'><i className="bi bi-facebook"></i></Link> </li>
                                <li><Link to='https://www.linkedin.com/company/al-barka-fabrics-pvt-ltd'><i className="bi bi-linkedin"></i></Link> </li>
                            </ul>
                    </div>
                </div>
            </header>
            <nav>
                <Navbar expand="lg" className={isSticky ? 'sticky active' : 'sticky bg-light'}>
                    <Container>
                        <Navbar.Brand className="logo">
                            <Link to="/"><h4><span>Albarka</span> Fabrics</h4></Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto">
                                <Link to="/" className="nav-link">Home</Link>
                                <Link to="/about-us" className="nav-link">About Us</Link>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-link dropdown-toggle">
                                        Operations
                                    </a>
                                    <ul className="dropdown-menu ps-2 pe-2 pb-3">
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/weaving'>Weaving </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/processing'>Processing </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/rotary-printing'>Rotary Printing </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/digital-printing'>Digital Printing </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/stitching'>Stitching </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/operations/product-development'>Product Development </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-link dropdown-toggle">
                                        Products
                                    </a>
                                    <ul className="dropdown-menu ps-2 pe-2 pb-3">
                                        <li className="dropdown">
                                            <Link className='link' to='/products/fabric'>Fabric </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/products/home-textile'>Home Textile </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/products/institutional-garments'>Institutional Garments </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/products/institutional-textile'>Institutional Textile </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/products/garments'>Garments </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-link dropdown-toggle">
                                        Quality Control
                                    </a>
                                    <ul className="dropdown-menu ps-2 pe-2 pb-3">
                                        <li className="dropdown">
                                            <Link className='link' to='/certificates'>Certificates </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/quality-compliance'>Quality & Compliance </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/code-of-conduct'>Code of Conduct </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to='/sustainability'>Sustainability </Link>
                                        </li>
                                        <li className="dropdown">
                                            <Link className='link' to=''>EHS </Link>
                                        </li>
                                    </ul>
                                </li>
                                <Link to="/contact-us" className="nav-link">Contact Us</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>
        </>
    );
}

export default Header;
