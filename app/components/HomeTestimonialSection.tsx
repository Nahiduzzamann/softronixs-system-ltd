"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const testimonials = [
  {
    name: "Foisal Mehdi",
    position: "CEO of ITC International",
    feedback:
      "After delivery of the product we faced some issues but their support team was able to solve it immediately and was very helpful.",
    rating: 4,
  },
  {
    name: "Miquel Asmus",
    position: "CEO of Kaifeng",
    feedback:
      "Softronixs provided us the Best Hotel & Restaurant Management Software and Website. It is the best because of their user-friendly services.",
    rating: 5,
  },
  {
    name: "Abdulla AL Mamun",
    position: "CEO of Khulna Logistics",
    feedback:
      "Softronixs is the Best Logistics Software Development Company of Bangladesh. They make our businesses easier and simpler for our Logistics service company.",
    rating: 5,
  },
  {
    name: "Foisal Mehdi",
    position: "CEO of ITC International",
    feedback:
      "After delivery of the product we faced some issues but their support team was able to solve it immediately and was very helpful.",
    rating: 4,
  },
  {
    name: "Miquel Asmus",
    position: "CEO of Kaifeng",
    feedback:
      "Softronixs provided us the Best Hotel & Restaurant Management Software and Website. It is the best because of their user-friendly services.",
    rating: 5,
  },
];

const HomeTestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-secondaryBlack pt-36 py-12 text-center">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primarySky text-sm md:text-base font-semibold uppercase tracking-widest"
      >
        Testimonial
      </motion.h2>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-2xl md:text-3xl font-bold text-primaryWhite mt-2"
      >
        What They Say About Our Company
      </motion.h1>

      {/* Slider Container */}
      <div className="relative overflow-hidden w-full container mx-auto mt-10">
        <motion.div
          className="flex "
          drag="x"
          dragConstraints={{ left: -400, right: 400 }}
          initial={{ x: 0 }}
          animate={{ x: -current * 350 }}
          transition={{ type: "spring", stiffness: 100 }}

        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] md:min-w-[350px] bg-primaryBlack p-6 rounded-lg shadow-lg mx-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              {/* Stars */}
              <div className="flex justify-center mb-2 text-primaryOrange">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>

              {/* Feedback */}
              <p className="text-primaryGray text-sm md:text-base leading-relaxed">
                {testimonial.feedback}
              </p>

              {/* Name & Position */}
              <h3 className="text-primarySky font-semibold mt-4">
                {testimonial.name}
              </h3>
              <p className="text-primaryGray text-xs">{testimonial.position}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="bg-primarySky px-4 py-2 rounded-full text-white hover:bg-primaryPurple transition-all"
          onClick={handlePrev}
        >
          ◀
        </button>
        <button
          className="bg-primarySky px-4 py-2 rounded-full text-white hover:bg-primaryPurple transition-all"
          onClick={handleNext}
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default HomeTestimonialSection;
