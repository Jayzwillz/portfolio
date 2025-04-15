import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote: "Jah’swill brought our vision to life with seamless execution and top-tier UI work. His attention to detail is unmatched!",
    name: "Emily Chen",
    title: "Product Manager",
  },
  {
    quote: "Reliable, innovative, and collaborative. Jah’swill is a key asset on any project that values quality frontend craftsmanship.",
    name: "Samuel Brooks",
    title: "CTO, NovaTech",
  },
  {
    quote: "We saw major improvements in our platform after working with Jah’swill — highly recommend him for frontend-heavy projects.",
    name: "Aisha Rahman",
    title: "Founder, CodeSphere",
  },
];

const Testimonial = () => {
  return (
    <motion.section
      id="testimonials"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-purple-400 mb-10">
          Testimonials
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 6000 }}
          pagination={{ clickable: true }}
          loop={true}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gray-800 rounded-xl p-8 shadow-lg text-center space-y-6 max-w-3xl mx-auto"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <p className="text-lg italic text-gray-300">“{testimonial.quote}”</p>
                <div className="space-y-1">
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.title}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
