"use client";
import React from "react";
import { motion } from "framer-motion";
import HomeHeroSection from "@/app/components/HomeHeroSection";
import HelpSection from "./HelpSection";
import FundamentalSection from "./FundamentalSection";
import ExpertiseSection from "@/app/components/ExpertiseSection";
import MoreAboutUs from "./MoreAboutUs";
import TrustedBrands from "@/app/components/TrustedBrands";
import TeamCardSEO from "@/app/components/TeamCardCEO";
export default function page() {
  return (
    <div className="w-full py-16 bg-gradient-to-b bg-secondaryBlack text-primaryWhite">
      {/* Section Wrapper */}
      <div className="container mx-auto p-3">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold text-center"
        >
          Softronixs - Services
        </motion.h2>

        <HomeHeroSection></HomeHeroSection>
      </div>
      <HelpSection></HelpSection>
      <FundamentalSection></FundamentalSection>
      <ExpertiseSection></ExpertiseSection>
      <TeamCardSEO></TeamCardSEO>
      <MoreAboutUs></MoreAboutUs>
      <TrustedBrands></TrustedBrands>
    </div>
  );
}
