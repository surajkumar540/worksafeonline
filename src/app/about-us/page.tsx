import TradeSafetyBanner from "./components/TradeSafetyBanner";
import OurTeam from "./components/OurTeam";
import Marquee from "./components/Marquee";
import Features from "@/components/common/Features";
import Blogs from "./components/Blogs";
import BusinessStats from "./components/BusinessStats";
import Header from "./components/Header";
import { fetchMetaData } from "@/api/generalApi";
interface PageData {
  title?: string;
  keyword?: string;
  descriptions?: string;
  noIndex?: boolean;
}

export async function generateMetadata() {
  const pageData: PageData = await fetchMetaData("/about-us"); // Use the defined interface
  return {
    title: "WorkSafeOnline | About Us",
    keywords: "seo",
    alternates: { canonical: `https://www.worksafeonline.co.uk/about-us` },
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
