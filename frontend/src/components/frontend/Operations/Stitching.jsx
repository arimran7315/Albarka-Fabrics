import React from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import Hero from '../../common/Hero'
import SidebarFrontend from '../../common/SidebarFrontend'
import Banner from '../../../assets/images/Operations/stitching/banner-1.png'
const Stitching = () => {
    return (
        <>
            <Header />
            <Hero heading={"Operations"} subheading={" / Stitching"} />
            <section className='container py-5 section-product'>
                <div className="row py-5">
                    <div className="col-md-8">
                        <h2>Stitching</h2>
                        <div className="card shadow border-0 rounded-0">
                            <img src={Banner} alt="" width='100%' className='rounded' />
                            <div className="card-body">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium rerum vitae blanditiis totam non, sequi voluptatibus quibusdam. Expedita fuga itaque earum consequatur enim nostrum eos doloremque. Magni nulla dolores modi provident magnam eveniet nesciunt. Facilis magnam quaerat ad cum, quod, dolorum ipsam ea aspernatur dignissimos similique excepturi ipsum dolor natus nobis laboriosam accusantium. Amet, nihil? Nemo maiores, aspernatur dolorum iste natus eum harum corporis sunt, placeat nobis quaerat dolorem explicabo tenetur id laudantium modi, laborum voluptatum ab eaque nam officia quidem tempore vel! Rerum, temporibus possimus quisquam voluptatum dicta iure animi enim necessitatibus voluptatibus sunt a neque minus repellat cupiditate?</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <SidebarFrontend/>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Stitching