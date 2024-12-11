import React from 'react'
import Header from '../common/Header'
import Hero from '../common/Hero'
import Footer from '../common/Footer'
import { default as NewCertificate } from '../common/Certificates'
const Certificate = () => {
    return (
        <>
            <Header />
            <Hero heading={"Quality Control"} subheading={" / Certificates"} />
            <NewCertificate />
            <Footer />
        </>
    )
}

export default Certificate