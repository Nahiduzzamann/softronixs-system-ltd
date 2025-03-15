
import HomeBanner from "@/app/components/HomeBanner";
import HomeFunFact from "@/app/components/HomeFunFact";
import React from "react";

export default function UserHome() {
  return (
    <div className="md:mt-32 mt-28">
     <HomeBanner></HomeBanner>
     <HomeFunFact></HomeFunFact>
    </div>
  );
}
