"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "PRODUCT DEVELOPMENT",
    description:
      "Whether you are a start-up or an established business, we are ready to assist you at every stage of the software development life cycle — from conceptualization and consulting to development and support. We are also experts in many verticals and business domains, including e-Commerce, e-Learning, AdTech, Finance, Entertainment, and more. We build native, hybrid, and cross-platform apps that run on all major operating systems such as iOS and Android.",
  },
  {
    title: "PROJECT MANAGEMENT",
    description:
      "We constantly focus on improving our method of agile development in distributed projects. The method is based on our training and experience with Scrum and developed further through our long experience with software development in Bangladesh. We have talented Project Managers and developers ready to work with you. With the usage of state of the art collaboration tools the team becomes a high performing distributed team.the goal and the business objectives.",
  },
  {
    title: "COLLABORATION",
    description:
      "Succeeding with distributed development and an offshore team is not always straightforward. Our on boarding program is a set of workshops that will help you develop the necessary skills to manage an offshore team. The program focuses on the barriers and the enablers to succeed in distributed teams. One of the goals is to ensure that your onshore team and the offshore team have a common perception of",
  },
  {
    title: "Develop",
    description:
      "Product development helps you test and refine your concepts to transform them into successful products and services that people want and are willing to pay.",
  },
];

const MoreAboutUs = () => {
  return (
    <div className=" bg-secondaryBlack pt-16">
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
           More About us
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

export default MoreAboutUs;
