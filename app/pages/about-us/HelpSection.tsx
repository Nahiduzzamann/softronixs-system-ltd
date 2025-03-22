"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    title: "How can we help you?",
    description:
      "Softronixs is a Top Rated & Best Software Design & Development, Website Design & Development, Best SEO Agency & Digital Marketing, and Graphics Company of Bangladesh. With more than 5 years of experience, we are recognized as one of the leading development company in Bangladesh. We serve our clients with quality services and deliver what they want. Having great experience in different development sectors, we stand first to adopt all the latest technologies to provide our clients with some unique developments.",
  }
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

export default HelpSection;
