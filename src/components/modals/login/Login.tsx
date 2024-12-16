import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { toast } from "react-toastify";
import { bigShoulders } from "@/app/layout";
import { IoEye, IoEyeOff } from "react-icons/io5";
import eventEmitter from "@/hooks/useEventEmitter";
import { IoArrowBackOutline } from "react-icons/io5";
import { getDeviceData } from "@/api/generateDeviceId";

interface LoginResponse {
  token: string;
  message: string;
  status: boolean;
}

const Login = ({
  email,
  onClose,
  setScreen,
}: {
  email: any;
  onClose: any;
  setScreen: any;
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors on change
  };

  // const validateForm = () => {
  //   let valid = true;
  //   const newErrors = { email: "", password: "" };

  //   // Email validation
  //   if (!formData.email) {
  //     newErrors.email = "Email is required.";
  //     valid = false;
  //   } else if (
  //     !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
  //   ) {
  //     newErrors.email = "Please enter a valid email address.";
  //     valid = false;
  //   }

  //   // Password validation
  //   if (!formData.password) {
  //     newErrors.password = "Password is required.";
  //     valid = false;
  //   } else if (formData.password.length < 7) {
  //     newErrors.password = "Password must be at least 7 characters long.";
  //     valid = false;
  //   }

  //   setErrors(newErrors);
  //   return valid;
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // if (!validateForm()) return;
      setLoading(true);
      const deviceData = getDeviceData();
      const data = {
        pushID: "",
        appID: "Worksafe",
        username: formData?.email,
        password: formData?.password,
        DeviceID: deviceData ? deviceData.deviceId : "",
      };
      const responseData: any = await axios.post(
        "https://johntrn.worksafeonline.co.uk/api/NewLogin",
        data
      );
      const response: LoginResponse = responseData?.data;
      if (response?.status && response?.token) {
        eventEmitter?.emit("loggedIn");
        setFormData({ password: "", email: "" });
        sessionStorage.setItem("verified", "true");
        toast.success("User logged in successfully!");
        localStorage.setItem("WORK_SAFE_ONLINE_USER_TOKEN", response?.token);
        onClose();
      } else if (!response?.status && response?.message)
        toast.error(response?.message);
    } catch (error) {
      console.log("Login error: " + error);
      toast.error("Invalid login credentials");
    } finally {
      setLoading(false);
    }
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
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Username"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full p-2 border-b outline-none bg-transparent ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            />
            <span
              className="absolute cursor-pointer right-0 top-4 z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
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
