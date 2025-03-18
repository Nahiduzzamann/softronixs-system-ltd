"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const HomeStartProjectSection = () => {
    return (
        <div className="w-full py-16 bg-secondaryBlack flex justify-center px-3">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-4xl p-10 rounded-lg text-center shadow-lg"
            style={{
              background: "linear-gradient(135deg, #212529 40%, #111111 100%)",
            }}
          >
            {/* Background Pattern */}
            <motion.div
              className="absolute inset-0 bg-opacity-20 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ duration: 1.5 }}
              style={{
                background: "linear-gradient(135deg, #bd4cec 20%, #00aaef 80%)",
              }}
            />
    
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-primaryWhite text-2xl md:text-3xl font-bold relative"
            >
              Would you like to start a project with us?
            </motion.h2>
    
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-primarySky text-sm md:text-base mt-4 relative"
            >
              <strong>Softronixs</strong> is a Top Rated & Best Software Development,
              Website Design & Development, SEO Agency & Digital Marketing, and
              Graphics Company of Bangladesh.
            </motion.p>
    
            {/* Contact Button */}
           <div className="flex justify-center">
           <motion.div
              whileHover={{ scale: 1.05, backgroundColor: "#eb6c40" }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 flex justify-center items-center py-3 bg-primarySky text-primaryWhite font-semibold rounded-full transition-all relative w-40"
            >
              <Link href='/pages/contact-us'>
              Contact Us →
              </Link>
            </motion.div>
           </div>
          </motion.div>
        </div>
      );
};

export default HomeStartProjectSection;
