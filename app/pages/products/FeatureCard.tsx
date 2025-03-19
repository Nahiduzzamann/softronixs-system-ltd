"use client";

import { motion } from "framer-motion";
import { Feature } from "./page";

const FeatureCard = ({ title, icon: Icon, description }: Feature) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-secondaryBlack p-6 rounded-lg shadow-lg flex flex-col items-center text-primaryWhite justify-between"
    >
      <Icon className="text-primarySky text-4xl mb-4" />
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-primaryGray text-center">{description}</p>
      </div>
      <button className="mt-4 px-4 py-2 border border-primaryYellow text-primaryWhite font-medium rounded-md hover:bg-primaryYellow transition-all duration-300">
        Learn more
      </button>
    </motion.div>
  );
};
export default FeatureCard;
