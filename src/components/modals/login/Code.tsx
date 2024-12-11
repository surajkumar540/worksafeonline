import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

const Code = ({ setScreen }: { setScreen: any }) => {
  const [errors, setErrors] = useState({ email: "" });
  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({ email: "" });
    setScreen("registerSuccess");
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={25}
              onClick={() => setScreen("register")}
              className="text-primary cursor-pointer"
            />
          </span>
          <Link href="/">
            <Image
              width={100}
              height={60}
              unoptimized
              alt="Logo"
              src={
                "https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
              }
              className="w-2/5 object-contain mx-auto md:mr-auto md:ml-0"
            />
          </Link>
        </div>
        <div>
          <h2
            className={`text-4xl md:text-6xl mb-2 text-center md:text-left font-bold text-primary/90 uppercase ${bigShoulders.className}`}
          >
            Register!
          </h2>
          <p className="text-center md:text-left text-white/80">
            Welcome to WORKSAFE, Please enter your group or company code below
            and select &apos;Continue&apos;
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-4 md:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Company or Group Code (Optional)"
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
          </div>
          <button
            type="submit"
            onClick={() => setScreen("registerAccount")}
            className={`w-full py-2 px-4 bg-primary text-black uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
          >
            Continue
          </button>
        </form>
        <div>
          <button
            type="button"
            onClick={() => setScreen("login")}
            className={`w-full py-2 px-4 text-primary uppercase rounded-full text-lg font-bold hover:bg-primary hover:text-black transition outline-none ${bigShoulders.className}`}
          >
            Skip to next
          </button>
          <p className="text-xs mt-2 text-center text-white/60">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & condition{" "}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
