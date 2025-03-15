'use client'
import Image from "next/image";
import img from "@/public/Images/programmer.png";
import { motion } from "framer-motion";
import Link from "next/link";
const HomeHeroSection = () => {
  return (
    <div className=" bg-secondaryBlack text-primaryWhite pt-16">
      <div className="container mx-auto p-3 flex flex-col md:flex-row items-center justify-between ">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-lg"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-primarySky mb-6">
            Lets Make Better <br /> World With Technology!
          </h1>
          <p className="text-primaryGray mb-6">
            Softronixs is a leading web design and development company in
            Khulna, Bangladesh. We provide SEO-friendly websites, business
            blogs, and 24/7 management support.
          </p>
          <Link
          href="#"
          className="bg-primarySky text-primaryBlack px-6 py-3 rounded-lg font-semibold shadow-md"
        >
          Discover More
        </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 md:mt-0 md:w-1/2"
        >
          <Image
            src={img}
            alt="Tech Professional"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default HomeHeroSection;
