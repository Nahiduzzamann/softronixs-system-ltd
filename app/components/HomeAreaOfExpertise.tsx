"use client";

import { motion } from "framer-motion";

const expertiseData = [
  {
    title: "Mijn Eet Schema",
    subtitle: "AI of Food technology",
    image: "/Images/expertise1.jpg",
  },
  {
    title: "Hasto Tech",
    subtitle: "Cloud Service",
    image: "/Images/expertise2.jpg",
  },
  {
    title: "Carbon Inc.",
    subtitle: "Web Design",
    image: "/Images/expertise3.jpg",
  },
];

const HomeAreaOfExpertise = () => {
  return (
    <div className="bg-secondaryBlack py-12 md:py-20">
      <div className="relative w-full container mx-auto p-3">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primarySky text-center text-lg font-semibold uppercase tracking-widest"
        >
          Soft Skill
        </motion.h2>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-primaryWhite text-center mt-2"
        >
          Area of Expertise
        </motion.h1>

        {/* Grid Layout */}
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-primaryBlack/80 rounded-lg shadow-lg overflow-hidden border border-primaryGray"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-primarySky text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-primaryGray mt-2">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeAreaOfExpertise;
