"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const features = [
  { title: "Best ROI Techniques", icon: "🛡️" },
  { title: "Best Quality Designs", icon: "🎨" },
  { title: "24x7 Live Support", icon: "🤖" },
  { title: "Award Winning Support Team", icon: "🏆" },
  { title: "Experienced Professionals", icon: "👨‍💼" },
  { title: "Domain & Hosting facility", icon: "☁️" },
];

const HomeWhyChooseUs = () => {
  return (
    <div className="bg-secondaryBlack">
      <div className="relative w-full py-20   overflow-hidden">
        {/* Background Gradient & Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primaryBlack via-secondaryBlack to-primaryGray opacity-90"></div>
        <div className="container mx-auto px-3">
          <div className="absolute right-0 top-10 w-2/3 h-3/4 bg-opacity-10 bg-primarySky rounded-full blur-3xl"></div>

          {/* Content */}
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-primarySky text-lg font-semibold uppercase tracking-widest">
                Why Choose Us
              </h2>
              <h1 className="text-3xl md:text-4xl font-bold text-primaryWhite mt-2">
                See the difference professional services we can do for you!
              </h1>

              {/* Buttons */}
              <div className="mt-6 flex gap-4">
                <Link
                href='#'
                  className="bg-primaryYellow text-primaryWhite px-6 py-3 rounded-md font-semibold"
                >
                  More Information →
                </Link>
                <Link
                href='#'
                  className="bg-primaryGreen text-primaryBlack px-6 py-3 rounded-md font-semibold border border-primaryYellow text-primaryWhite"
                >
                  More Information →
                </Link>
              </div>
            </motion.div>

            {/* Right Feature Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-primaryBlack/80 border border-primaryGray p-6 rounded-xl shadow-lg flex items-center space-x-3"
                >
                  <span className="text-primarySky text-2xl">
                    {feature.icon}
                  </span>
                  <h3 className="text-primaryWhite font-semibold">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeWhyChooseUs;
