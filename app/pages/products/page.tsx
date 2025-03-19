"use client";
import React from "react";
import HeroSection from "./HeroSection";
import {
  FaDatabase,
  FaShoppingCart,
  FaChartBar,
  FaRobot,
  FaClipboardList,
  FaChartLine,
  FaGlobe,
  FaShieldAlt,
} from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { IconType } from "react-icons";

export interface Feature {
  title: string;
  description: string;
  icon: IconType; // Correct type for react-icons
}

const features: Feature[] = [
  {
    title: "Central ERP Solutions",
    icon: FaDatabase,
    description:
      "Comprehensive ERP system to streamline your business operations.",
  },
  {
    title: "HRM Management",
    icon: FaClipboardList,
    description:
      "Efficient human resource management with automation and analytics.",
  },
  {
    title: "Pharmaceutical ERP",
    icon: FaDatabase,
    description: "Tailored ERP solutions for the pharmaceutical industry.",
  },
  {
    title: "VAT Management System",
    icon: FaChartBar,
    description: "Automate VAT calculations and compliance processes.",
  },
  {
    title: "DATA WAREHOUSE & ANALYTICS",
    icon: FaDatabase,
    description: "Advanced data analytics for strategic decision-making.",
  },
  {
    title: "E-Procurement Solution",
    icon: FaShoppingCart,
    description: "Seamless procurement and vendor management platform.",
  },
  {
    title: "Business Intelligence",
    icon: FaChartBar,
    description:
      "Transform raw data into actionable insights with BI solutions.",
  },
  {
    title: "AI Chatbot",
    icon: FaRobot,
    description:
      "Intelligent chatbot solutions to enhance customer engagement.",
  },
  {
    title: "Order Management System",
    icon: FaClipboardList,
    description: "Efficient tracking and fulfillment of customer orders.",
  },
  {
    title: "Capital Market Solution",
    icon: FaChartLine,
    description: "Advanced trading and market analytics platform.",
  },
  {
    title: "Internet Insurance Solution",
    icon: FaGlobe,
    description: "Digital-first insurance solutions for modern businesses.",
  },
  {
    title: "Life Insurance Solution",
    icon: FaShieldAlt,
    description: "Comprehensive life insurance management system.",
  },
];
export default function page() {
  return (
    <div className="bg-primaryBlack">
      <HeroSection></HeroSection>
      <div className="container mx-auto p-3 py-20">
        <h2 className="text-3xl text-primaryWhite font-bold text-center mb-8">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}
