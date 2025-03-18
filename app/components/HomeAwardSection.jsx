"use client";

import { motion } from "framer-motion";

const HomeAwardSection = () => {
  return (
    <div className="relative w-full bg-secondaryBlack">
      {/* Background Image */}
      <div className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="/Images/award.jpg"
          alt="Award Background"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondaryBlack"></div>
      </div>

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-x-0 -bottom-20 mx-auto max-w-3xl bg-primaryBlack p-8 md:p-12 rounded-lg shadow-lg text-center"
      >
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primarySky text-sm md:text-base font-semibold uppercase tracking-widest"
        >
          Our Achievements
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-bold text-primaryWhite mt-2"
        >
          Our Prestigious Award
        </motion.h1>

        {/* Description */}
        <p className="text-primaryGray mt-4 text-sm md:text-base leading-relaxed">
          With more than <span className="text-primaryYellow">5 years of experience</span>, we are recognized as one of the leading development companies in Bangladesh.
          We serve our clients with **quality services** and strive to adopt the latest technologies to provide unique developments.
        </p>

        {/* Award Logos */}
        <div className="mt-6 flex justify-center gap-6">
          {["/Images/company.png", "/Images/company.png", "/Images/company.png"].map(
            (logo, index) => (
              <motion.img
                key={index}
                src={`${logo}`}
                alt="Award Logo"
                className="h-12 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              />
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default HomeAwardSection;
