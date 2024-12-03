import React from "react";
import TradeSafetyBanner from "./components/TradeSafetyBanner";
import OurTeam from "./components/OurTeam";
import Marquee from "./components/Marquee";
import Features from "@/components/common/Features";
import Blogs from "./components/Blogs";
import AboutHeader from "../contact/components/AboutHeader";
import BusinessStats from "./components/BusinessStats";

const ListingByCategory = async () => {
  return <>
    <AboutHeader title="About Us" subtitle="About Us" />
    <TradeSafetyBanner />
    <Marquee/>
    <OurTeam/>
     <Blogs/>
    <Features />
    <BusinessStats/>
  </>
};

export default ListingByCategory;
