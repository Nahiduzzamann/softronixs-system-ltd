
import HomeBanner from "@/app/components/HomeBanner";
import HomeFunFact from "@/app/components/HomeFunFact";
import ServicesSection from "@/app/components/HomeOurService";
import React from "react";

export default function UserHome() {
  return (
    <div className="md:mt-32 mt-28">
     <HomeBanner></HomeBanner>
     <ServicesSection></ServicesSection>
     <HomeFunFact></HomeFunFact>
    </div>
  );
}
