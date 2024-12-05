import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import { bigShoulders } from "@/app/layout";
import { IoEye, IoEyeOff } from "react-icons/io5";

const LoginModal = ({
  onclose,
  isVisible,
}: {
  isVisible: boolean;
  onclose: () => void;
}) => {
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

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" };

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
      valid = false;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required.";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Handle login logic (API calls)
    console.log("Form submitted:", formData);
  };

  return (
    <Modal
      onClose={onclose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-3/5"
      showCloseButton={false}
    >
      <div className="relative text-white h-[400px]">
        {/* Close Icon */}
        <RxCross1
          size={24}
          onClick={onclose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 hover:text-primary absolute top-2 z-20 right-3 text-white"
        />

        {/* Background Image */}
        <Image
          fill
          priority
          alt="Login Banner"
          className="object-cover"
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-center items-center p-4 md:p-6 lg:p-10 z-10">
          <div className="w-full md:w-1/2 mr-auto rounded-lg">
            <h2
              className={`text-4xl mb-6 font-bold text-center ${bigShoulders.className}`}
            >
              Sign In
            </h2>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="text"
                  name="email"
                  placeholder="Email ID or Username"
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

              {/* Submit Button */}
              <button
                type="submit"
                className={`w-full py-2 px-4 bg-primary text-black uppercase rounded-lg shadow-md text-lg font-bold hover:bg-primary/80 outline-none ${bigShoulders.className}`}
              >
                LOGIN
              </button>
            </form>

            {/* Additional Links */}
            <div className="mt-4 text-center">
              <Link href="/forgot-password" className="text-sm hover:underline">
                Forget password?
              </Link>
              <p className="text-sm mt-2">
                Don&apos;t have an account?{" "}
                <Link
                  href="/create-account"
                  className="text-primary hover:underline"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
