import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

const Login = ({ setScreen }: { setScreen: any }) => {
  const email = "login@gmail.com";
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
    setScreen("code");
  };

  return (
    <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center p-4 md:p-6 lg:p-10 z-10">
      <div className="w-full lg:w-1/2 flex h-full gap-1 md:border-r md:border-white/20 flex-col justify-between">
        <div className="flex gap-4">
          <span className="p-[2px] h-fit hover:scale-125 transition hover:bg-[#1C1C1C] rounded-full">
            <IoArrowBackOutline
              size={25}
              onClick={() => setScreen("welcome")}
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
            Login!
          </h2>
          <p className="text-center md:text-left text-white/80">
            Please check your email for more information.
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 space-y-6 md:pl-10">
        <p className="text-center text-base text-white/80">
          We have emailed your username and password to:{" "}
          <span className="text-primary underline cursor-not-allowed">
            {email}
          </span>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              name="email"
              placeholder="Email ID or Username"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              type="text"
              name="email"
              placeholder="Password"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-primary text-black uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
          >
            Login
          </button>
          <p className="text-xs mt-2 text-center text-white/60">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & condition{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
