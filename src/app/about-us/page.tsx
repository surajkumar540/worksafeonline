import TradeSafetyBanner from "./components/TradeSafetyBanner";
import OurTeam from "./components/OurTeam";
import Marquee from "./components/Marquee";
import Features from "@/components/common/Features";
import Blogs from "./components/Blogs";
import BusinessStats from "./components/BusinessStats";
import Header from "./components/Header";

const AboutUS = async () => {
  return (
    <>
      <Header title="About Us" />
      <TradeSafetyBanner />
      <Marquee />
      <OurTeam />
      <BusinessStats />
      <Blogs />
      <Features />
    </>
  );
};

export default AboutUS;
