import TradeSafetyBanner from "./components/TradeSafetyBanner";
import OurTeam from "./components/OurTeam";
import Marquee from "./components/Marquee";
import Features from "@/components/common/Features";
import Blogs from "./components/Blogs";
import BusinessStats from "./components/BusinessStats";
import Header from "./components/Header";
import { Get } from "@/api/generalApi";

export async function generateMetadata() {
  // Replace with the correct endpoint
  const pageData = await Get("");

  return {
    title: pageData?.title ?? "Worksafeonline | About Us",
    keywords: pageData?.keyword ?? "default, keywords", // Provide default value if keyword is missing
    description: pageData?.descriptions ?? "Default description", // Provide default if description is missing
    alternates: {
      canonical: `https://www.worksafeonline.co.uk/about-us`, // Ensure URL is correct
    },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}



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
