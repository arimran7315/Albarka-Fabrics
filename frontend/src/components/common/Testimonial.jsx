import React, { useCallback, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { apiUrl, fileUrl } from './http';
const Testimonial = () => {
    const [testimonials, setTestimonials] = useState('');

    const fetchTestimonials = useCallback( async() => {
        try {
            const res = await fetch(`${apiUrl}testimonial`);
            const result = await res.json();
            setTestimonials(result?.data || []);
            // console.log(result.data);
        } catch (error) {
            console.error("Error fetching Testimonials:", error);
        }
    }, []);
    useEffect(() => {
        fetchTestimonials();
    }, [fetchTestimonials]);
    return (
        <>
            <section className="section-testimonial">
                <div className="container py-5">
                    <div className="row text-center">
                        <span>
                            Testimonials
                        </span>
                        <h2>
                            Clients Feedback
                        </h2>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem nesciunt, consectetur repellat voluptatibus facere.
                        </p>
                    </div>
                    <div className="row">
                        <Swiper
                            modules={[Pagination, Autoplay, A11y]}

                            spaceBetween={30}
                            slidesPerView={2}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            // onSlideChange={() => console.log('slide change')}
                        >
                            {testimonials?.length > 0 ? (
                                testimonials.map((testimonial) => (
                                    <SwiperSlide key={testimonial.id}>
                                        <div className="item">
                                            <div className="testimonial">
                                                <div className="pic">
                                                    <img
                                                        src={`${fileUrl}uploads/testimonials/small/${testimonial.image}`}
                                                        alt={`testimonial-${testimonial.id}`}
                                                    />
                                                </div>
                                                <p className="description">
                                                   {testimonial.comment}
                                                </p>
                                                <h3 className="title">
                                                    {testimonial.name}
                                                </h3>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            ) : (
                                <p>No Testimonial found.</p>
                            )}

                        </Swiper>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Testimonial