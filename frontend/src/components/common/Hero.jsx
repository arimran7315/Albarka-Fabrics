import React from 'react'

const Hero = ({heading,subheading}) => {
  return (
    <>
    <div className="hero-2 d-flex justify-content-center align-items-center">
            <div className="container">
                <div className="">
                    <span>
                        Al Barka Fabrics
                    </span>
                    <h2>
                    {heading} {subheading} 
                    </h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero