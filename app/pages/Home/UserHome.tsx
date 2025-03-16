
import HomeBanner from "@/app/components/HomeBanner";
import HomeFunFact from "@/app/components/HomeFunFact";
import HomeHeroSection from "@/app/components/HomeHeroSection";
import ServicesSection from "@/app/components/HomeOurService";
import TrustedBrands from "@/app/components/TrustedBrands";
import React from "react";

export default function UserHome() {
  return (
    <div className="md:mt-32 mt-28">
     <HomeBanner></HomeBanner>
     <TrustedBrands></TrustedBrands>
     <HomeHeroSection></HomeHeroSection>
     <ServicesSection></ServicesSection>
     <HomeFunFact></HomeFunFact>
    </div>
  );
}
