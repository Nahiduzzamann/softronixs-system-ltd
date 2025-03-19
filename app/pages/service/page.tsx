"use client";

import { motion } from "framer-motion";
import WhatWeDo from "./WhatWeDoSection";
import ServicesSection from "@/app/components/HomeOurService";
import HomeWhyChooseUs from "@/app/components/HomeWhyChooseUs";
import HomeTestimonialSection from "@/app/components/HomeTestimonialSection";
import HomeStartProjectSection from "@/app/components/HomeStartProjectSection";
import FAQSection from "./FAQSection";

const ServicesPage = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b bg-secondaryBlack text-primaryWhite">
      {/* Section Wrapper */}
      <div className="container mx-auto p-3">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Softronixs - Services
        </motion.h2>

        {/* Content Wrapper */}
        <div className="mt-12 flex flex-col-reverse md:flex-row items-center md:items-start gap-12">
          {/* Left Side (Text Content) */}
          <div className="flex-1 space-y-4">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="text-primarySky text-sm uppercase tracking-widest"
            >
              About Service
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primarySky text-2xl md:text-3xl font-bold"
            >
              Softronixs provide a wide range of services
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              className="text-primaryGray text-lg leading-relaxed"
            >
              Softronixs is a Top Rated & Best Software Design & Development,
              Website Design & Development, Best SEO Agency & Digital Marketing,
              and Graphics Company of Bangladesh.
            </motion.p>

            {/* More Information Button */}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#eb6c40" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-primarySky text-primaryWhite font-semibold rounded-full shadow-lg transition-all"
            >
              More Information →
            </motion.button>
          </div>

          {/* Right Side (Image with Animation) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg"
          >
            {/* Animated Overlay Circle */}
            <motion.div
              className="absolute -top-4 -left-4 w-10 h-10 bg-primarySky rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1, ease: "backOut" }}
            />

            <motion.img
              src="/Images/programmer.png" // Replace with actual image path
              alt="Softronixs Services"
              className="w-full object-cover rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            />

            {/* Bottom-Right Decorative Plus Icons */}
            <motion.div
              className="absolute bottom-4 right-4 text-primarySky text-xl md:text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              + + + + +
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-6 text-primarySky text-xl md:text-2xl font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              + + + + +
            </motion.div>
          </motion.div>
        </div>
      </div>
      <WhatWeDo></WhatWeDo>
      <ServicesSection></ServicesSection>
      <HomeWhyChooseUs></HomeWhyChooseUs>
      <HomeTestimonialSection></HomeTestimonialSection>
      <FAQSection></FAQSection>
      <HomeStartProjectSection></HomeStartProjectSection>
    </div>
  );
};

export default ServicesPage;
