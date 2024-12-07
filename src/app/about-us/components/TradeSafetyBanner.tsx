import { bigShoulders } from "@/app/layout";
import Image from "next/image";
import React, { ReactNode } from "react";
import { CiMedal } from "react-icons/ci";
import { FaArrowRightLong } from "react-icons/fa6";
import { LuPencilRuler, LuTags } from "react-icons/lu";

// Types for the ContentCard props
type ContentCardProps = {
  title: string;
  description: string;
  imgUrl: string;
};

// Types for the FeatureHighlight props
type FeatureHighlightProps = {
  icon: ReactNode; // Allows any React element as the icon
  title: string;
  description: string;
};

const TradeSafetyBanner = () => {
  return (
    <div className="max-w-9xl mx-auto  py-8 px-4 md:px-6 lg:px-10 lg:py-10">
      <section>
        {/* Heading Section */}
        <div className="w-full">
          <p
            className={`uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight font-extrabold ${bigShoulders.className}`}
          >
            Your Premier Workwear and Safety Centre :
          </p>
          <p className="text-gray-500 text-base mt-4">
            For Quality Workwear, Footwear and Safety Gear look no further than Worksafe. A long established Independent Company, we operate from our large Showroom and Warehouse in Corby Northamptonshire. Our dedicated staff are ready to serve you; Whatever your industry, Worksafe can provide uniforms for all of your staff and also cater for sole traders and private individuals alike. With in-house design, print and embroidery facilities, our technicians are ready to logo and personalise your Workwear requirements. If our store is too far away for you to visit, or you would like to place an ‘out of hours’ order, you can still purchase logo’d workwear online. Using our the latest online design facility, simply choose your garment, then add your logo, select from the gallery of designs, upload your own logo, or place text to create your workwear. This innovative design facility will provide you with endless solutions for all of your Workplace uniform requirements.
            If your company has a specific requirement, our experienced staff are also available to meet with you onsite to provide advice, guidance and to discuss ongoing contract products, solutions and prices. Whatever your requirements we are pleased to serve you online, by phone, or in our store and hope you enjoy the convenience, quality and experience that Worksafe has to offer.
          </p>
        </div>

        {/* Main Content */}
        <div className="lg:flex gap-10 my-6 w-full">
          {/* Left Side Content */}
          <div className="flex flex-col md:flex-row gap-10 p-2 justify-center items-center border-b-2 md:border-0">
            {/* Card 1 */}
            <ContentCard
              title="Business Idea"
              description="We sell workwear, work gloves, and work shoes for professionals with high demands on function, quality, safety, and design. We sell our products through our online shop or direct agreements with our customer management."
              imgUrl="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ab-img1.jpg"
            />
            <Divider />

            {/* Card 2 */}
            <ContentCard
              title="Our Vision"
              description="We aim to be a global leader in supplying workwear, work gloves, work shoes, and profile clothes for professionals. Our products are designed to facilitate the work of professionals in various occupations."
              imgUrl="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/ab-img2.jpg"
            />
            <Divider />
          </div>

          {/* Right Side Content */}
          <div className="w-full mt-4">
            <p
              className={`uppercase text-3xl md:text-4xl lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
            >
              Trusted Name In Safety
            </p>
            <p className="text-gray-500 text-xl mt-4">
              Our success in the market has been driven by the depth and breadth
              of our product range and our service commitment to clients.
            </p>

            {/* Feature Highlights */}
            <div className="mt-8 flex flex-col gap-6">
              <FeatureHighlight
                icon={<CiMedal size={64} className="text-gray-600" />}
                title="Quality Products"
                description="Sed tellus augue, hendrerit eu rutrum in, porttitor at metus. Mauris ac hendrerit metus."
              />
              <FeatureHighlight
                icon={<LuPencilRuler size={64} className="text-gray-600" />}
                title="Custom Branding"
                description="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis blandit pretium."
              />
              <FeatureHighlight
                icon={<LuTags size={64} className="text-gray-600" />}
                title="Competitive Price"
                description="Mauris ac hendrerit metus. Phasellus mattis lectus commodo felis egestas."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Components
const ContentCard: React.FC<ContentCardProps> = ({ title, description, imgUrl }) => (
  <div className="flex flex-col w-full h-full">
    {/* lg:aspect-[1/1] */}
    <div className=" w-full rounded-md overflow-hidden">
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className="object-cover w-full h-auto transition-transform duration-300 ease-in-out bg-slate-600 transform hover:scale-110"
        unoptimized
      />
    </div>
    <div>
      <p
        className={`uppercase text-start w-full text-3xl md:text-4xl mt-4 lg:text-3xl tracking-tight font-extrabold ${bigShoulders.className}`}
      >
        {title}
      </p>
      <p className="text-gray-500 text-md mt-4">{description}</p>
      <div className="flex justify-start w-full">
        <span className="relative font-sans uppercase font-semibold w-fit mt-8 flex bg-white text-black space-x-2 items-start cursor-pointer hover:text-primary py-4">
          <p className="w-full text-xs">See Product Range</p>
          <FaArrowRightLong className="ml-2 text-primary" />
        </span>
      </div>
    </div>
  </div>
);

const Divider: React.FC = () => (
  <div className="w-[1px] h-[600px] lg:h-full hidden md:block bg-gray-400" />
);

const FeatureHighlight: React.FC<FeatureHighlightProps> = ({ icon, title, description }) => (
  <div className="flex gap-3">
    <div>{icon}</div>
    <div className="flex flex-col">
      <p
        className={`uppercase text-xl tracking-tight font-extrabold ${bigShoulders.className}`}
      >
        {title}
      </p>
      <p className="text-gray-500 text-md mt-4">{description}</p>
    </div>
  </div>
);

export default TradeSafetyBanner;
