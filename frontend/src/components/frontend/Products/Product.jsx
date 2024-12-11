import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import product1 from '../../../assets/images/products/product1.webp';
import product2 from '../../../assets/images/products/product2.webp';
import product3 from '../../../assets/images/products/product3.webp';
import { Link } from 'react-router-dom'
const Product = () => {
  return (
    <>
    <Header/>
    <Hero heading={'Products'} />
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
                    </div>
                </div>
            </div>
    <Footer/>
    </>
  )
}

export default Product