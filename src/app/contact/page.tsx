import { fetchMetaData, Get } from "@/api/generalApi";
import Header from "./components/Header";
import { features } from "@/data/country";
import Map from "./components/MapComponent";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";

interface PageData {
  title?: string;
  keyword?: string;
  descriptions?: string;
  noIndex?: boolean;
}

export async function generateMetadata() {
  const pageData: PageData = await fetchMetaData("/contact-us"); // Pass string instead of an object
  return {
    title:  "WorkSafeOnline | Contact Us",
    keywords:"seo ",
    description: "descrption here",
    alternates: { canonical: `https://www.worksafeonline.co.uk/contact-us` },
    robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",

    // title: pageData?.title ?? "Worksafe | Contact Us",
    // keywords: pageData?.keyword,
    // description: pageData?.descriptions,
    // alternates: { canonical: `https://www.unfazed.in/contact-us` },
    // robots: pageData?.noIndex ? "noindex, nofollow" : "index, follow",
  };
}


export default async function Page() {
  const data = await Get("api/ContactDetail1?app=Worksafe");
  return (
    <>
      <Header title="Contact" subtitle="Contact" />
      <ContactDetails details={data} />
      <Map location={data?.Location} />
      <ContactForm />
      <div className="max-w-9xl mx-auto grid grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className="flex py-16 flex-col border items-center"
            >
              <div className="mb-4 text-3xl md:text-4xl">
                <Icon />
              </div>
              <p className="text-center md:text-lg font-medium">
                {feature.title}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
