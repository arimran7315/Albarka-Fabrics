import React from 'react'
import Header from '../common/Header'
import Hero from '../common/Hero'
import Footer from '../common/Footer'
import Code1 from '../../assets/images/other/code1.png'
import Code2 from '../../assets/images/other/code2.png'

const CodeOfconduct = () => {
    return (
        <>
            <Header />
            <Hero heading={"Quality Control "} subheading={"/ Quality & Compliance"} />
            <section className="section-about">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={Code1} alt="" className='w-100' />
                        </div>
                        <div className="col-md-6 ps-4">
                            <span>
                                Making Your Life Easier
                            </span>
                            <h2>
                                Quality & Compliance
                            </h2>
                            <p>The practices of Albarka fabrics are compliant and in accordance with applicable laws which are clearly defined in the code of conduct. Our Human Resource department plays an integral role in educating and training employees regarding the code of conduct and its implementation.</p>
                        </div>
                    </div>
                    <div className="row py-5 mt-5">
                        <div className="col-md-6 ps-4 mt-5">
                            <div class="row mt-4">
                                <div class="col-4">
                                    <ol class="feature-list-item">
                                        <li>Safety and Security</li>
                                        <li>Conflict of Interest</li>
                                        <li>External Activities</li>
                                        <li> Fair Dealing </li>
                                        <li>Confidentiality</li>
                                        <li>Recruitment Decisions</li>
                                    </ol>
                                </div>
                                <div class="col-8">
                                    <ol start="7" class="feature-list-item">
                                        <li>Corporate Governance</li>
                                        <li>Regulatory Compliance</li>
                                        <li>Compliance with Laws, Rules and Regulations</li>
                                        <li>Work Place Harassment and Discrimination</li>
                                        <li>
                                            Protection and Proper Use of Company Assets
                                        </li>
                                        <li>
                                            Corporate Social Responsibility
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={Code2} alt="" className='w-100' />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default CodeOfconduct