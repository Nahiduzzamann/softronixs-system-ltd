
import HomeAreaOfExpertise from "@/app/components/HomeAreaOfExpertise";
import HomeBanner from "@/app/components/HomeBanner";
import HomeFunFact from "@/app/components/HomeFunFact";
import HomeHeroSection from "@/app/components/HomeHeroSection";
import ServicesSection from "@/app/components/HomeOurService";
import HomeProcessSection from "@/app/components/HomeProcessSection";
import HomeWhyChooseUs from "@/app/components/HomeWhyChooseUs";
import HomeAwardSection from "@/app/components/HomeAwardSection";
import TrustedBrands from "@/app/components/TrustedBrands";
import React from "react";
import HomeTestimonialSection from "@/app/components/HomeTestimonialSection";
import HomeStartProjectSection from "@/app/components/HomeStartProjectSection";

export default function UserHome() {
  return (
    <div className="">
     <HomeBanner></HomeBanner>
     <TrustedBrands></TrustedBrands>
     <HomeHeroSection></HomeHeroSection>
     <HomeProcessSection></HomeProcessSection>
     <ServicesSection></ServicesSection>
     <HomeFunFact></HomeFunFact>
     <HomeWhyChooseUs></HomeWhyChooseUs>
     <HomeAreaOfExpertise></HomeAreaOfExpertise>
     <HomeAwardSection></HomeAwardSection>
     <HomeTestimonialSection></HomeTestimonialSection>
     <HomeStartProjectSection></HomeStartProjectSection>
    </div>
  );
}
