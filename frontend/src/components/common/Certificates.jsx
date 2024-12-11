import React from 'react'
// Import images individually
import image1 from '../../assets/images/clients/client1.png';
import image2 from '../../assets/images/clients/client2.png';
import image3 from '../../assets/images/clients/client3.png';
import image4 from '../../assets/images/clients/client4.png';
import image5 from '../../assets/images/clients/client5.png';
import image6 from '../../assets/images/clients/client6.png';
import image7 from '../../assets/images/clients/client7.png';
import image8 from '../../assets/images/clients/client8.png';
import image9 from '../../assets/images/clients/client9.png';
import image10 from '../../assets/images/clients/client10.png';
import image11 from '../../assets/images/clients/client11.png';
import image12 from '../../assets/images/clients/client12.png';
import image13 from '../../assets/images/clients/client13.png';
import image14 from '../../assets/images/clients/client14.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// Store images in an array
const clientLogos = [
    { src: image1, alt: 'Client 1' },
    { src: image2, alt: 'Client 2' },
    { src: image3, alt: 'Client 3' },
    { src: image4, alt: 'Client 4' },
    { src: image5, alt: 'Client 5' },
    { src: image6, alt: 'Client 6' },
    { src: image7, alt: 'Client 7' },
    { src: image8, alt: 'Client 8' },
    { src: image9, alt: 'Client 9' },
    { src: image10, alt: 'Client 10' },
    { src: image11, alt: 'Client 11' },
    { src: image12, alt: 'Client 12' },
    { src: image13, alt: 'Client 13' },
    { src: image14, alt: 'Client 14' }
];
const Clients = () => {
    return (
        <>
            {/* Clients start */}
            <div className="section-certificates py-5">
                <div className="container py-5">
                    <div className="row text-center ">
                        <span>
                            Certificates
                        </span>
                        <h2>
                            Our Certifications
                        </h2>
                        <p>
                            Albarka believes in setting high standards, thus our focus is on achieving international benchmarks, which has made us compliant with the following certifications:
                        </p>
                    </div>
                    <div className="row">
                        <div className="slider-container py-2">
                            <div className="slider">
                                <Swiper
                                    modules={[Autoplay]}
                                    loop={true}
                                    autoplay={{
                                        delay: 0, // Continuous motion
                                        disableOnInteraction: false,
                                    }}
                                    speed={5000} // Slower speed for seamless scroll
                                    allowTouchMove={true} // Disable user dragging
                                    spaceBetween={0} // No space between slides
                                    slidesPerView="10" // Automatic sizing of slides
                                >
                                    {clientLogos.map((logo, index) => (
                                        <SwiperSlide key={index}>
                                            <img src={logo.src} alt={logo.alt} className='w-75'/>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Clients End */}
        </>
    )
}

export default Clients