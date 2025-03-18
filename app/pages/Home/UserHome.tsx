
import HomeBanner from "@/app/components/HomeBanner";
import HomeFunFact from "@/app/components/HomeFunFact";
import HomeHeroSection from "@/app/components/HomeHeroSection";
import ServicesSection from "@/app/components/HomeOurService";
import HomeProcessSection from "@/app/components/HomeProcessSection";
import TrustedBrands from "@/app/components/TrustedBrands";
import React from "react";

export default function UserHome() {
  return (
    <div className="">
     <HomeBanner></HomeBanner>
     <TrustedBrands></TrustedBrands>
     <HomeHeroSection></HomeHeroSection>
     <HomeProcessSection></HomeProcessSection>
     <ServicesSection></ServicesSection>
     <HomeFunFact></HomeFunFact>
    </div>
  );
}
