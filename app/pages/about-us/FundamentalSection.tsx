import { FaUsers, FaBullseye, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import FundamentalCard from "./FundamentalCard";

const fundamentalData = [
  {
    icon: <FaUsers />,
    title: "Who Are We?",
    description:
      "We began developing applications in 2015 and have grown into a full-cycle software development company.",
  },
  {
    icon: <FaBullseye />,
    title: "Our Mission",
    description:
      "Our designers and developers will help you create scalable products and services to reach your goals.",
  },
  {
    icon: <FaShieldAlt />,
    title: "What We Do?",
    description:
      "We focus on delivering practical and enduring results, equipping our clients to grow and lead.",
  },
];

const FundamentalSection = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto p-3 text-center">
        {/* Section Title */}
        <motion.h3
          className="text-primarySky uppercase text-sm font-semibold tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          OUR CULTURE
        </motion.h3>
        <motion.h2
          className="text-primaryWhite text-3xl font-bold mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our Fundamental Business
        </motion.h2>

        {/* Card Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {fundamentalData.map((item, index) => (
            <FundamentalCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default FundamentalSection;
