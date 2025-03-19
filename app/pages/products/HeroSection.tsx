"use client";

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      {/* Background Image */}
      <div className="relative h-[250px] lg:h-[400px] w-full overflow-hidden">
        <img
          src="/Images/hero-bg.png"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center text-primaryWhite px-4"
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="uppercase tracking-wide text-primarySky font-semibold"
          >
            Top Rated & Best
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold mt-2"
          >
            Software, Website & Digital Marketing Company
          </motion.h1>
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-5 px-6 py-3 bg-primaryGreen text-primaryWhite font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>

      {/* Description Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        className="bg-secondaryBlack text-primaryWhite py-16 px-6 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold">
          Software, Website & Digital Marketing Company
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-primaryGray leading-relaxed">
          We constantly focus on improving our method of agile development in
          distributed projects. The method is based on our training and
          experience with Scrum and developed further through our long
          experience with software development in Bangladesh. We have talented
          Project Managers and developers ready to work with you. With the usage
          of state-of-the-art collaboration tools, the team becomes a high-performing
          distributed team, achieving business goals efficiently.
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;
