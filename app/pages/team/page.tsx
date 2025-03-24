"use client";
import React from "react";
import { motion } from "framer-motion";
import AboutTeam from "./AboutTeam";
import TeamCardSEO from "../../components/TeamCardCEO";
import WhyWeDifferentSection from "./WhyWeDifferentSection";

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
          Meet Our Team
        </motion.h2>
      </div>
      <TeamCardSEO></TeamCardSEO>
      <AboutTeam></AboutTeam>
      <WhyWeDifferentSection />
    </div>
  );
}
