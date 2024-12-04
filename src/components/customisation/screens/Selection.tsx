import { bigShoulders } from "@/app/layout";

const Selection = ({
  handleNext,
  handleSetFilterScreen,
}: {
  handleNext: any;
  handleSetFilterScreen: any;
}) => {
  return (
    <>
      <div className="bg-gray-300 h-[1px]" />
      <p
        className={`${bigShoulders.className} text-4xl mt-3 text-center font-black uppercase`}
      >
        <span className="text-primary">Choose Logo</span> or Design
      </p>
      <p className="text-base text-gray-800 font-semibold text-center -mt-4">
        (Select an option below to proceed with your branding)
      </p>
      <div className="w-1/2 mx-auto mt-2">
        <div className="w-full max-w-xl mx-auto pb-6">
          <div className="flex justify-between gap-5">
            <button
              onClick={() => handleSetFilterScreen(3)}
              className="w-full bg-gradient-to-r from-primary to-primary/50 text-black py-4 px-8 rounded-xl hover:bg-primary/80 transition duration-300 ease-in-out shadow-md transform hover:scale-105 focus:outline-none"
            >
              <span
                className={`font-black uppercase text-2xl ${bigShoulders.className}`}
              >
                Select Logo
              </span>
              <p className="text-sm mt-2">
                Choose from pre-designed logos for your brand.
              </p>
            </button>
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white py-4 px-8 rounded-xl hover:from-green-500 hover:to-green-700 transition duration-300 ease-in-out shadow-md transform hover:scale-105 focus:outline-none"
            >
              <span
                className={`font-black uppercase text-2xl ${bigShoulders.className}`}
              >
                Create Design
              </span>
              <p className="text-sm text-gray-200 mt-2">
                Design a custom logo with your brand's elements.
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
