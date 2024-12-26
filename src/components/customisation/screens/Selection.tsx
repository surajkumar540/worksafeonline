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
      <p className="text-base text-gray-800 font-semibold text-center my-5">
        Select an option below to proceed with your branding
      </p>
      <div className="w-full lg:w-1/2 mx-auto mt-2">
        <div className="w-full max-w-xl mx-auto pb-6">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <button
              onClick={() => handleSetFilterScreen(3)}
              className="w-full bg-gradient-to-r outline-none from-primary to-primary/50 text-black py-4 px-8 rounded-xl hover:bg-primary/80 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
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
              className="w-full bg-gradient-to-r outline-none from-green-400 to-green-600 text-white py-4 px-8 rounded-xl hover:from-green-500 hover:to-green-700 transition-all duration-300 ease-in-out shadow-md transform hover:scale-105"
            >
              <span
                className={`font-black uppercase text-2xl ${bigShoulders.className}`}
              >
                Create Design
              </span>
              <p className="text-sm text-gray-200 mt-2">
                Design a custom logo with your brand&apos;s elements.
              </p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selection;
