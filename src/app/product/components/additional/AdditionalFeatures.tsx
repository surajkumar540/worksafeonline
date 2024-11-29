import { bigShoulders } from "@/app/layout";

const AdditionalFeatures = ({ productFeatures }: { productFeatures: any }) => {
  const updatedData = productFeatures.map(({ Num, ...rest }: any) => rest);
  return (
    <div className="mt-8 lg:mt-14 flex flex-col gap-6">
      <div className="block lg:flex">
        <div className="flex flex-col gap-5 w-[44%]">
          <h2
            className={`${bigShoulders.className} uppercase text-black text-4xl font-extrabold`}
          >
            Features :
          </h2>
        </div>
        <div className="flex flex-col gap-5 w-full mt-5 lg:mt-0">
          {updatedData.map((feature: any, index: number) => (
            <div key={index} className="flex flex-col gap-5">
              {Object.entries(feature).map(([key, value]) => (
                <div key={key} className="border-b pb-5">
                  <p className="uppercase mb-2 text-xl font-semibold">{key}</p>
                  <p className="text-gray-500 whitespace-pre-line">
                    {String(value)}
                  </p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
