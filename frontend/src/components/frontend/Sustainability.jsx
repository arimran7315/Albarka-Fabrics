import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import Quality from '../../assets/images/other/sustain1.png'
import Independance from '../../assets/images/other/sustain2.png'
const Sustainability = () => {
  return (
    <>
    <Header />
      <Hero heading={"Quality Control "} subheading={"/ Quality & Compliance"} />
      <section className="section-about">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6">
              <img src={Quality} alt="" className='w-100' />
            </div>
            <div className="col-md-6 ps-4">
              <span>
                Making Your Life Easier
              </span>
              <h2>
              Sustainability

              </h2>
              <p>Albarka fabrics takes the commitment towards sustainability very seriously. Our sustainability approach focuses on achieving more with optimum use of resources. We believe that sustainability leads to long term business success, and provides a benchmark to be a responsible player in the manufacturing industry. As we move forward on our path to become a sustainable organization, we focus on creating a balance between our practices and the surroundings we live in. However, the areas of foremost concern to us are: optimizing our energy resources and discovering better opportunities in energy conservation. We have intently focused our efforts on reusing our waste stream by treating and recycling it. We believe that in order to stay competitive, we must look further than operations scrutinizing ways to reduce our environmental footprint, and increasing efficiency across the value chain. Thus, we are continually improving our processes and structures, reducing our consumption of resources, and ultimately reducing our environmental impact. We systematically focus all our activities throughout the value chain on sustainable development challenges as they relate to our operations. We have grouped these challenges into five overarching focal areas namely:

</p>
            </div>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-md-6 ps-4">
              <span>
                Making Your Life Easier
              </span>
              <h2>
              Protecting Enviroment

              </h2>
              <div class="row">
                            <div class="col">
                                <ol class="feature-list-item">
                                    <li>Energy and Climate</li>
                                    <li>Chemical Management</li>
                                    <li>Effluent Recycling</li>
                                    <li> Green Initiatives </li>
                                    <li>Corporate Social Responsibility</li>


                                </ol>
                            </div>

                        </div>
            </div>
            <div className="col-md-6">
              <img src={Independance} alt="" className='w-100' />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Sustainability