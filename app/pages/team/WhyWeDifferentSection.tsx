"use client";
import { motion } from "framer-motion";

const WhyWeDifferentSection = () => {
  return (
      <div className="container mx-auto p-3  flex flex-col lg:flex-row items-center justify-between text-primaryWhite py-16 lg:py-20">
        {/* Left Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h3 className="text-primarySky uppercase text-sm tracking-wider">
            Professional Team
          </h3>
          <h2 className="text-4xl font-bold mt-2">Why We Are Different</h2>
          <p className="text-primaryGray mt-3">
            Softronixs System Ltd. stands out due to our innovation in
            technology, user-centric design, and expertise in software
            solutions.
          </p>

          {/* Progress Bars */}
          <div className="mt-8">
            <h3 className="text-primarySky uppercase text-sm tracking-wider">
              Abilities and Skills
            </h3>
            <div className="mt-4">
              {[
                { title: "Technical Skills", value: 97 },
                { title: "Marketing", value: 90 },
                { title: "Creative", value: 95 },
                { title: "Teamwork", value: 87 },
              ].map((skill, index) => (
                <div key={index} className="space-y-4">
                  <div>{skill.title}</div>
                  <motion.div
                    initial={{ width: "0%" }}
                    animate={{ width: `${skill.value}%` }}
                    transition={{ duration: 1.2, delay: index * 0.3 }}
                    className="bg-primaryGray h-2 rounded-md"
                  >
                    <div className="bg-primarySky h-2 rounded-md relative">
                      <span className="absolute right-0 -top-6 text-sm text-primaryWhite bg-secondaryBlack px-2 py-1 rounded-md">
                        {skill.value}%
                      </span>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Section: Features Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full lg:w-1/2 mt-10 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {[
            {
              title: "Visioners",
              desc: "Empowering businesses with visionary software solutions.",
              icon: "👁️",
            },
            {
              title: "Creative",
              desc: "Unleashing imagination through cutting-edge design.",
              icon: "🎨",
            },
            {
              title: "Reliable",
              desc: "Trustworthy and dependable solutions.",
              icon: "✅",
            },
            {
              title: "Prestigious",
              desc: "Elevating brands through sophisticated aesthetics.",
              icon: "🏆",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="p-5 bg-secondaryBlack rounded-md shadow-lg text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-3xl">{feature.icon}</div>
              <h3 className="text-primarySky font-semibold text-xl mt-3">
                {feature.title}
              </h3>
              <p className="text-primaryGray mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
};

export default WhyWeDifferentSection;
