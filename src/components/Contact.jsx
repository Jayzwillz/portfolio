import React, { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xnnplpjz", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 bg-gray-900 text-white"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center text-purple-400 mb-12">
          Contact Me
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-gray-300">
              I'm always open to new opportunities, collaborations, or just a friendly chat!
            </p>

            {submitted ? (
              <div className="p-6 bg-green-700 text-white rounded-lg shadow-md text-center">
                Thank you! Your message has been sent.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full sm:w-1/2 px-6 py-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full sm:w-1/2 px-6 py-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  className="w-full px-6 py-4 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg sm:text-xl text-gray-300">
              Or, you can reach me through these channels:
            </p>
            <div className="flex gap-8 justify-start text-3xl text-gray-400">
              <a href="https://wa.me/2349016510703" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaWhatsapp />
              </a>
              <a href="mailto:jahswill4jahs@gmail.com" className="hover:text-white">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Jayzwillz" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/jayzwillz/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
