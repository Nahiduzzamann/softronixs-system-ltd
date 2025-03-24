'use client'
import { motion } from "framer-motion";

export default function AboutTeam() {
  return (
    <div className=" py-16">
      <div className="container mx-auto p-3 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        {/* Left Section */}
        <motion.div
          className="text-left md:w-[40%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[#00aaef] uppercase text-sm font-semibold tracking-wide">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-primarySky mt-2">
            How can our team <br /> help you?
          </h2>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className=" md:w-[60%] text-primaryWhite text-sm leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            Softronixs is a Top Rated & Best Software Design & Development,
            Website Design & Development, Best SEO Agency & Digital Marketing,
            and Graphics Company of Bangladesh. With more than 5 years of
            experience, we are recognized as one of the leading development
            companies in Bangladesh.
          </p>
          <p className="mt-4">
            We serve our clients with quality services and deliver what they
            want. Having great experience in different development sectors, we
            stand first to adopt all the latest technologies to provide our
            clients with some unique developments.
          </p>

          {/* Button */}
          <motion.button
            className="mt-6 border border-primaryYellow hover:bg-yellow-500 transition px-6 py-3 rounded-md text-primaryWhite font-semibold shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

