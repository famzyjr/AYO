import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./testimonials.css";
import AOS from "aos";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import 'swiper/css/scrollbar'

// ..
AOS.init({
  duration: 2000,
});

const data = [
  {
    id: 1,
    // avatar: ,
    name: "Mr Toyosi",
    review: "Working with Ayomide was an absolute pleasure! Their keen eye for detail and dedication to creating an exceptional user experience truly shone throughout the entire project. From the initial concept phase to the final delivery, Ayomide demonstrated a deep understanding of our users' needs and preferences, resulting in a design that exceeded our expectations."
  },
 
]

const Testimonials = () => {
  return (
    <section id="testimonials" data-aos="zoom-in-down">
      <h5> Review from clients </h5>
      <h2> Testimonials </h2>
      <div className="underline"></div> 

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, avatar, name, review})=>{
          return(
        <SwiperSlide className="testimonial" key={id}>
          <div className="client__avatar">
            {/* <img src={avatar} alt="Avatar One" /> */}
          </div>
            <h5 className='client__name'>{name}</h5>
            <div className="review">
              <FaQuoteLeft className='quote'/>
                <small className='client__review'>
                  {review}
                </small>
                </div>
        </SwiperSlide>
            )
          })
        }
      
      </Swiper>
    </section>
  )
}

export default Testimonials
