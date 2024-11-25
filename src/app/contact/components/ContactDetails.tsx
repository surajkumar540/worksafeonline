import { TbClockHour4 } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { bigShoulders } from "@/app/layout";

interface ContactDetail {
  icon: any;
  title: string;
  description: string;
}

const ContactDetails: React.FC = () => {
  const details: ContactDetail[] = [
    {
      icon: IoStorefrontOutline,
      title: "STORE LOCATION",
      description: "7409 Mayfield Rd, Woodhaven, NY 11421",
    },
    {
      icon: MdOutlineLocationOn,
      title: "HEADQUARTER",
      description: "803 Blackburn Dr, Champaign, IL 61821",
    },
    {
      icon: TbClockHour4,
      title: "OFFICE HOURS",
      description: "Monday - Friday, 8:00am - 4:00pm",
    },
    {
      icon: MdOutlineMarkEmailRead,
      title: "CONTACT INFO",
      description: "Tel: (984) 123-456-88\nEmail: info@example.com",
    },
  ];

  return (
    <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-3 lg:gap-5 py-8 px-4 md:px-6 lg:px-10 lg:py-20">
      {details.map((detail, index) => {
        const Icon = detail.icon;
        return (
          <div key={index} className="flex flex-col">
            <div className="flex flex-col lg:flex-row justify-center items-center md:justify-start md:items-start text-4xl gap-5">
              <Icon />
              <div className="text-center md:text-left">
                <h3
                  className={`font-black uppercase text-2xl md:text-xl lg:text-3xl ${bigShoulders.className}`}
                >
                  {detail.title}
                </h3>
                <p className="mt-5 text-gray-700 text-lg md:text-sm lg:text-lg whitespace-pre-line">
                  {detail.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
