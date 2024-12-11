import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
    return (
        <>

            <footer>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4">
                            <h4>
                                Albarka Fabrics
                            </h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere eaque debitis quibusdam fugit officiis necessitatibus.
                            </p>
                        </div>
                        <div className="col-md-4 px-5 quick-links">
                            <h5>
                                Quick Links
                            </h5>
                            <ul>
                            <li><Link to='/'>Home</Link></li>
                                <li><Link to='/about-us'>About us</Link></li>
                                <li><Link to='/contact-us'>Contact us</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-4 px-5">
                            <h5>
                                Contact
                            </h5>
                            <ul>
                                <li> <strong>Mail to: </strong><a href="mail:">info@albarkafabrics.com</a></li>
                                <li><strong>Contact no: </strong><a href="https://wa.me/923158662027">0300 15421351</a></li>
                            </ul>
                            <strong>Address: </strong>1-KM Jaranwala Road, Khurrianwala,
                            Faisalabad – 38000 - Pakistan
                        </div>
                    </div>
                    <div className="row py-2">
                        <hr />
                    </div>
                    <div className="footer-2 d-flex justify-content-between align-items-center">
                        <p>© Albarka Fabrics (PVT) LTD. All Rights Are Reserved</p>
                        <ul className='social-links'>
                            <li className='border-end'><Link to='https://wa.me/923018668008'><i className="bi bi-whatsapp"></i></Link> </li>
                            <li className='border-end'> <Link to='https://www.facebook.com/profile.php?id=61566842366145'><i className="bi bi-facebook"></i></Link> </li>
                            <li> <Link to='https://www.linkedin.com/company/al-barka-fabrics-pvt-ltd'><i className="bi bi-linkedin"></i></Link> </li>
                        </ul>
                    </div>
                   
                </div>
            </footer>
        </>
    )
}

export default Footer