import React from 'react'
import AboutImg from '../../assets/images/about/about.webp'
import Map from '../../assets/images/about/map.png'
import Ceo from '../../assets/images/about/ceo.png'
import Md from '../../assets/images/about/md.png'
const About = () => {
    return (
        <>
            {/* About Start */}
            <div className="section-about py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={AboutImg} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6 ps-4">
                            <span>
                                About Us
                            </span>
                            <h2>
                                Why choose us
                            </h2>
                            <p>Our journey began over two decades ago in 1998 as a small processing unit. Today, it is a leading name in the export of quality home-textile fabrics and made-ups from Pakistan. We are producing wide range of fabrics for bedding, institutional, pocketing/lining, mattress ticking and the furnishing industry, in greige (loom-state), bleached, and finished form. We convert almost half of these manufactured fabrics through our stitching units into sheets, pillows, shams, bed-skirts, duvets, quilts, comforters, drapes, and kitchen linen for our retail and institutional buyers around the globe.</p>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6 ps-4">
                            <span>
                                MAking Your Life Easier
                            </span>
                            <h2>
                                Global Exports
                            </h2>
                            <div className="row">
                                <div className="col-4">
                                    <ol className="feature-list-item">
                                        <li>USA</li>
                                        <li>South America</li>
                                        <li>Europe</li>
                                        <li>UK and Ireland</li>
                                        <li>South Africa</li>
                                    </ol>
                                </div>
                                <div className="col-8">
                                    <ol start='6' className="feature-list-item">
                                        <li>Australia</li>
                                        <li>Far East</li>
                                        <li>Scandinavia</li>
                                        <li>Middle East</li>
                                        <li>Asia (China, India, Bangladesh, Sri Lanka) </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={Map} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row text-center ">
                        <span>
                            Management
                        </span>
                        <h2>
                            Albarka Mangement
                        </h2>
                        <p>
                            Albarka believes in setting high standards, thus our focus is on achieving international benchmarks, which has made us compliant with the following certifications:
                        </p>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <img src={Ceo} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6 ps-4">
                            <span>
                            Muhammad Aslam
                            </span>
                            <h2>
                            CEO & Founder of Albarka Fabrics
                            </h2>
                            <p>Since the very inception of Albarka Group, we have focused on maintaining highest professional integrity, Customer satisfaction and top of the line product quality and services. The dedicated team of professionals I have on board, is the real asset to Albarka. With our next five years investment plan already in execution, I see Albarka as one of the key partner to the home textile goods buyers of the world as a preferred mill focused on innovation, sustainability, product reliability, social and quality compliances, health and safety management and employee career growth and welfare.</p>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row mt-5">
                        <div className="col-md-6 ps-4">
                            <span>
                            Muhammad Saad Sheikh
                            </span>
                            <h2>
                            Managing Director
                            </h2>
                            <p>I have been groomed, mentored and personally trained by the worthy CEO of the group to take the legacy forward as his son and as head of the textiles division’s marketing and operations. Together with all our employees, our main goal is to be a symbol of reliability and dignity for all our business partners and stakeholders in all countries where we operate across the globe. Since we set out with the understanding that our customers are our guardianship and life line of our business, our priority is to ensure the highest level of customer satisfaction. In line with this understanding, which forms the basis of our growth, we aim to provide products and services in universal quality and standards.

</p>
                        </div>
                        <div className="col-md-6">
                            <img src={Md} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
            {/* About Start */}
        </>
    )
}

export default About