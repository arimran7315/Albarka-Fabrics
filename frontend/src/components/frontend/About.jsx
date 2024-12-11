import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Hero from '../common/Hero'
import NewAbout from '../common/About'
const About = () => {
  return (
    <>
    <Header/>
    <main>
        <Hero heading={'About us'} />
        <NewAbout/>
    </main>
    <Footer/>
    </>
  )
}

export default About