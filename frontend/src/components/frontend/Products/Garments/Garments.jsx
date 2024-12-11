import React from 'react'
import Header from '../../../common/Header'
import Hero from '../../../common/Hero'
import Footer from '../../../common/Footer'

const Garments = () => {
  return (
    <>
    <Header/>
    <main>
      <Hero heading={'Products'} subheading={'/ Garments'}/>
      <section className="container py-5">
        <div className="row py-5">
          Garments
        </div>
      </section>
    </main>
    <Footer/>
    </>
  )
}

export default Garments