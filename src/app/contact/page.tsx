import Header from "./components/Header";
import Map from "./components/MapComponent";
import ContactForm from "./components/ContactForm";
import ContactDetails from "./components/ContactDetails";
import { features } from "@/data/country";

export default function Page() {
  return (
    <>
      <Header title="Contact" subtitle="Contact" />
      <ContactDetails />
      <Map />
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
