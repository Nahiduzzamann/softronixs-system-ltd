"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "Discover",
    description:
      "We follow a creative design discipline, where new designs are created from scratch.",
  },
  {
    title: "Define",
    description:
      "We research, observe, understand, and analyze client demand during the planning phase.",
  },
  {
    title: "Design",
    description:
      "We design for humans, by humans. Our designs help companies reimagine their relationships with people.",
  },
  {
    title: "Develop",
    description:
      "Product development helps you refine concepts into successful products that people love and are willing to pay for.",
  },
  {
    title: "Deploy",
    description:
      "Optimized implementation and deployment processes to ensure commitments remain aligned.",
  },
  {
    title: "Deliver",
    description:
      "We deliver high-quality projects to fuel your business for long-term success.",
  },
];

const HomeProcessSection = () => {
  return (
    <div className=" bg-secondaryBlack pt-16 ">
        <div className="relative w-full py-16 container mx-auto px-3">
      {/* Background with 3 Boxes */}
      <div className="absolute inset-0 flex justify-end">
        <div className="w-2/3 lg:w-1/2 bg-gradient-to-br from-primaryBlack via-secondaryBlack to-primaryGray rounded-l-[50px]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src="/Images/process.jpg"
            alt="Security Analysis"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Right Content */}
        <div className="text-primaryWhite">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primarySky text-xl font-semibold uppercase tracking-widest"
          >
            Feature
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-primaryWhite mt-2"
          >
            Our 6-D Process
          </motion.h1>

          {/* Steps */}
          <div className="mt-6 space-y-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-primaryBlack/70 backdrop-blur-lg border border-primaryGray p-5 rounded-xl shadow-md"
              >
                <h3 className="text-primarySky font-semibold text-lg">
                  {index + 1}. {step.title}
                </h3>
                <p className="text-primaryGray text-sm mt-1">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default HomeProcessSection;
