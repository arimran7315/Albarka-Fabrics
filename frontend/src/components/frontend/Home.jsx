import React from 'react'
import About from '../common/About'
import Certificates from '../common/Certificates'
import Footer from '../common/Footer'
import Header from '../common/Header'
import Testimonial from '../common/Testimonial'
import product1 from '../../assets/images/products/product1.webp';
import product2 from '../../assets/images/products/product2.webp';
import product3 from '../../assets/images/products/product3.webp';
import { Link } from 'react-router-dom'
import AboutImg from '../../assets/images/about/about.webp'

const Home = () => {

    return (
        <>
            <Header />
            <main>
                <div className="hero d-flex justify-content-center align-items-center">
                    <div className="container text-center">
                        <span>
                            Albarka Fabrics
                        </span>
                        <h1> 
                            Your Textile Companion
                        </h1>
                        <p>
                            Best Home Textile Exporter
                        </p>
                    </div>
                </div>
                {/* about Start */}
                <div className="section-about py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={AboutImg} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6 ps-4">
                            <span>
                            Making Your Life Easier
                            </span>
                            <h2>
                               About Us
                            </h2>
                            <p>Our journey began over two decades ago in 1998 as a small processing unit. Today, it is a leading name in the export of quality home-textile fabrics and made-ups from Pakistan. We are producing wide range of fabrics for bedding, institutional, pocketing/lining, mattress ticking and the furnishing industry, in greige (loom-state), bleached, and finished form. We convert almost half of these manufactured fabrics through our stitching units into sheets, pillows, shams, bed-skirts, duvets, quilts, comforters, drapes, and kitchen linen for our retail and institutional buyers around the globe. Partnership based on provision of sustainable and innovative textile products</p>
                        </div>
                    </div>
                </div>
                </div>
                {/* Product start */}
                <div className="section-products py-5 bg-light">
                    <div className="container">
                        <div className="row text-center">
                            <span>
                                Products
                            </span>
                            <h2>
                                Our Products
                            </h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem nesciunt, consectetur repellat voluptatibus facere.
                            </p>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <Link to="/products/institutional-garments">
                                    <div className="item my-4">
                                        <div className="service-img">
                                            <img src={product1} alt="service-img" className='w-100' />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>Institutional Garments</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, Imaterials, and techniques.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/products/fabric">
                                    <div className="item my-4">
                                        <div className="service-img">
                                            <img src={product2} alt="service-img" className='w-100' />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>Printed Fabrics</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, Imaterials, and techniques.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-4">
                                <Link to="/products/home-textile">
                                    <div className="item my-4">
                                        <div className="service-img">
                                            <img src={product3} alt="service-img" className='w-100' />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>Home Textile</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    Specialty construction is a niche sector within the construction industry that focuses on projects requiring specialized skills, Imaterials, and techniques.
                                                </p>

                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="row mt-4">
                                <div className="col text-center">
                                    <Link to="/products" className='btn btn-primary' style={{ '--bs-btn-active-bg': '#2c1464', '--bs-btn-active-color': '#fff', '--bs-btn-active-border-color': '#2c1464' }}>View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* product end */}
                <Testimonial />
                <Certificates />
                <Footer />
            </main>
        </>
    )
}

export default Home