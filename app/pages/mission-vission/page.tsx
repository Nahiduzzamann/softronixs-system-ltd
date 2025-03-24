"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeHeroSection from "@/app/components/HomeHeroSection";
import HomeWhyChooseUs from "@/app/components/HomeWhyChooseUs";
export default function page() {
  return (
    <div className="bg-secondaryBlack w-full">
      <div className="container mx-auto p-3 text-primaryWhite bg-gradient-to-r from-primaryBlack to-secondaryBlack py-16 ">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Mission & Vision
        </motion.h2>
      </div>
      <HomeHeroSection></HomeHeroSection>
      <HelpSection></HelpSection>
      <HomeWhyChooseUs></HomeWhyChooseUs>
    </div>
  );
}

const processSteps = [
  {
    title: "Our Vision",
    description:
      "A great future is coming with digitalization. Please are depending on machines for their work. We work for automation and we care about our clients. To be a model of excellence as an Information & Communication Technology company that our Shareholders, Customers, Suppliers, Associates, and Society would love to be associated with.",
  },
];

const HelpSection = () => {
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
            {/* Steps */}
            <div className="">
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
                  <p className="text-primaryGray text-sm mt-1">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
