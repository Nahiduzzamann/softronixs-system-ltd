"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

const brands = [
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
  { name: "Carbon", logo: "/Images/carbon.png" },
  { name: "GOOVI", logo: "/Images/goovi.png" },
];

const TrustedBrands = () => {
  const scrollRef = useRef(null);

  return (
    <div className="bg-primaryBlack py-10 overflow-hidden">
      <h2 className="text-primarySky text-center text-xl font-semibold mb-6">
        Trusted by International Brands
      </h2>

      {/* Scrollable Horizontal Wrapper */}
      <motion.div
        ref={scrollRef}
        className="flex space-x-8 overflow-x-auto no-scrollbar px-4"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="flex items-center justify-center min-w-[150px]"
            whileHover={{ scale: 1.1 }}
          >
            <img src={brand.logo} alt={brand.name} className="h-12 object-contain" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedBrands;
