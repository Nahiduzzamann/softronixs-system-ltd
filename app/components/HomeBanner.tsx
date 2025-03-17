"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Software, Website & Digital Marketing Company",
    subtitle: "Top Rated & Best",
    image: "/Images/programmer.png",
    button1: "Start Now",
    button2: "View Plans",
  },
  {
    title: "Software, Website & Digital Marketing Company",
    subtitle: "Top Rated & Best",
    image: "/Images/programmer.png",
    button1: "Start Now",
    button2: "View Plans",
  },

];

const HomeBanner = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className=" py-10 md:py-0  relative w-full h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center"
    style={{
      backgroundImage: `url('/Images/computer.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative w-full container mx-auto h-[500px] md:h-[600px] overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute w-full h-full flex flex-col md:flex-row items-center px-3"
          >
            {/* Left Content */}
            <div className="text-center md:text-left md:w-1/2 space-y-4 z-10">
              <p className="text-primaryWhite uppercase tracking-wide">
                {slides[current].subtitle}
              </p>
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primaryWhite">
                {slides[current].title}
              </h1>
              <div className="flex gap-4 mt-4 justify-center md:justify-start pb-4 md:pb-0">
                <button className="bg-primaryWhite text-primaryBlack font-medium px-5 py-2 rounded-full hover:bg-gray-200 transition">
                  {slides[current].button1}
                </button>
                <button className="border border-primaryWhite text-primaryWhite font-medium px-5 py-2 rounded-full hover:bg-primaryWhite hover:text-primaryBlack transition">
                  {slides[current].button2}
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="md:w-1/2 flex justify-center items-center relative">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden"
              >
                <img
                  src={slides[current].image}
                  alt="Slide Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 border-8 border-primaryYellow rounded-full"></div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute bottom-2 left-20 md:bottom-28 md:left-12 bg-white text-black rounded-full shadow-lg hover:bg-transparent hover:text-primaryWhite hover:border-2 border-primarySky transition flex justify-center items-center h-10 w-10"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute bottom-2 right-20 md:bottom-28 md:left-24  bg-white text-black rounded-full shadow-lg  transition flex justify-center items-center h-10 w-10 hover:text-primaryWhite hover:bg-transparent hover:border-2 border-primarySky "
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default HomeBanner;
