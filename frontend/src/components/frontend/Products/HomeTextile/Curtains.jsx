import React from 'react'
import Header from '../../../common/Header'
import Hero from '../../../common/Hero'
import Footer from '../../../common/Footer'
import { Link } from 'react-router-dom'
const Curtains = () => {
  return (
    <>
            <Header />
            <main>
                <Hero heading={'Home Textile'} subheading={'/ Bedding'} />
                <section className="section-product container py-5">
                    <div className="row py-5">
                        <div className="col-md-8">
                            <div className="row">
                                
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card border-0 bg-light">
                                <h4 className='px-4 pt-4'>
                                    Our Products
                                </h4>
                                <div className="card-body">
                                    <div className="sidebar-info">
                                        <ul>
                                            <li><a href="fabric.php">Fabric</a>
                                            </li>
                                            <li><a href="home-textile.php">Home Textile</a>
                                            </li>
                                            <li><a href="institutional-garments.php">Institutional Garments</a>
                                            </li>
                                            <li><a href="institutional-textile.php">Institutional Textile</a>
                                            </li>
                                            <li><a href="garments.php">Garments</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
  )
}

export default Curtains