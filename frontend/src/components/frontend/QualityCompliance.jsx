import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import Quality from '../../assets/images/other/quality.png'
import Independance from '../../assets/images/other/Independance.png'
const QualityCompliance = () => {
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
                Quality & Compliance
              </h2>
              <p>Albarka Fabrics is proud to be one of the pioneers of quality home textiles in Pakistan. Our strategy relies on adhering to strict standards of quality excellence, compliance to best textile practices and a penchant for the most minute detail. The end result is consistently a market-preferred product. It has its own in-house labs, ensuring that the products we make are durable and long lasting. These include treating material fibers to check thread quality, weather testing the material and even pressure tests to make sure the material can withstand maximum wear and tear.</p>
            </div>
          </div>
          <div className="row py-5 mt-5">
            <div className="col-md-6 ps-4">
              <span>
                Making Your Life Easier
              </span>
              <h2>
              Independance QC/QA
              </h2>
              <p>Quality Control is what differentiates Albarka Fabrics from other companies in the market. The QC works closely with Factory, Inventory, Operations and Sales. Product quality, service quality and logistic operations all contribute to quality excellence, managed by our Independent Quality Control Department. In order to ensure that no material is contaminated or deemed hazardous, Albarka Farics implements a strict Metal Free Packing policy. Instead the company encourages use of approved non-metal alternatives such as scotch tape, plastic paper clips and plastic swift tags.</p>
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

export default QualityCompliance