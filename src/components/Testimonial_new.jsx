import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    quote:
      "One of the things I admire most about Jah'swill is his unwavering commitment to growth and excellence. No matter the complexity or how new a task might be, he never backs down. Instead, he dives into research, asks the right questions, and delivers every project with quality and precision. His dedication to learning, not just independently but also by absorbing knowledge from those around him — including myself — is truly inspiring. Working with him has been a rewarding experience, and I have no doubt he'll continue to do great things wherever he goes.",
    name: "Samuel Abraham",
    title: "Front-End Engineer Student, AltSchool Africa",
    image: "/Samuel Abraham.jpeg",
  },
  {
    quote:
      "Working with Jah'swill on our frontend project was a great experience. His attention to detail, clean code, and problem-solving mindset really stood out. He's not just a great developer, but also an awesome team player who's always open to collaboration and new ideas.",
    name: "Samson Moradeyo",
    title: "Front-End Engineer Student, AltSchool Africa",
    image: "/Psalmotee.jpg",
  },
];

const Testimonial = () => {
  const { theme } = useTheme();
  
  return (
    <motion.section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-20"
      style={{ backgroundColor: theme.colors.background, color: theme.colors.text }}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-extrabold text-center mb-10"
            style={{ color: theme.colors.primary }}>
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
              <motion.figure
                className="rounded-xl p-8 shadow-lg text-center space-y-6 max-w-3xl mx-auto"
                style={{ backgroundColor: theme.colors.surface }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                viewport={{ once: true }}
              >
                <img
                  src={testimonial.image}
                  alt={`Portrait of ${testimonial.name}`}
                  className="w-20 h-20 rounded-full mx-auto object-cover border-4 shadow-md"
                  style={{ borderColor: theme.colors.primary }}
                />
                <blockquote className="text-lg italic" style={{ color: theme.colors.textSecondary }}>
                  "{testimonial.quote}"
                </blockquote>
                <figcaption className="space-y-1">
                  <h3 className="font-semibold" style={{ color: theme.colors.text }}>{testimonial.name}</h3>
                  <cite className="text-sm not-italic" style={{ color: theme.colors.textSecondary }}>{testimonial.title}</cite>
                </figcaption>
              </motion.figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};

export default Testimonial;
