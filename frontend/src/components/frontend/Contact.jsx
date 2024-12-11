import React from 'react'
import Header from '../common/Header'
import Hero from '../common/Hero'
import Footer from '../common/Footer'

const Contact = () => {
    return (
        <>
            <Header />
            <main>
                <Hero heading={'Contact us'} />
                {/* section-contact */}
                <div className="section-contact py-5">
                    <div className="container py-5">
                        <div className="row text-center">
                            <span>
                                Have Questions?
                            </span>
                            <h2>
                                Contact us
                            </h2>
                            <p>
                                If you have any Query Contact Us any of these.
                            </p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="card rounded-5 p-5">
                                    <div className="card-heading">
                                        <h3>
                                            Contact Information:
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <p className='mt-4'>
                                            <strong>Tel:</strong> +92-41-2428521
                                        </p>
                                        <p className='mt-3'>
                                            <strong>Our Location:</strong> 1-KM Jaranwala Road, Khurrianwala, Faisalabad – 38000 - Pakistan
                                        </p>
                                        <p className='mt-3'><strong>Official Email:</strong> info@albarkafabrics.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card p-5 rounded-5">
                                    <div className="card-heading">
                                        <h3>
                                            Send us a Massage
                                        </h3>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col mb-3">
                                                <label htmlFor="name">Name <span>*</span></label>
                                                <input type="text" className="form-control" name='name' id='name' placeholder='Enter Name' autoComplete='name' />
                                            </div>
                                            <div className="col mb-3">
                                                <label htmlFor="email">Email <span>*</span></label>
                                                <input type="email" className="form-control" name='email' id='email' placeholder='Enter Email' autoComplete='email' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col mb-3">
                                                <label htmlFor="subject">Subject</label>
                                                <input type="text" className="form-control" name='subject' id='subject' placeholder='Enter Subject' autoComplete='subject' />
                                            </div>
                                            <div className="col mb-3">
                                                <label htmlFor="tel">Mobile No</label>
                                                <input type="text" className="form-control" name='tel' id='tel' placeholder='Enter Mobile No' autoComplete='tel' />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col mb-3">
                                                <label htmlFor="description">Description</label>
                                                <textarea name="description" id="description" className='form-control' rows={'5'}></textarea>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col">
                                            <a href="" className='btn btn-primary'>Submit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact