import Link from "next/link";
import Image from "next/image";
import { Fetch, Post } from "@/utils/axios";
import { useEffect, useState } from "react";
import { bigShoulders } from "@/app/layout";
import { IoArrowBackOutline } from "react-icons/io5";

const RegisterAccount = ({
  formData,
  setScreen,
  setFormData,
}: {
  formData: any;
  setScreen: any;
  setFormData: any;
}) => {
  const [errors, setErrors] = useState({ depot: "", template: "" });
  const [depotList, setDepotList] = useState([]);
  const [templateList, setTemplateList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const depoUrl = "api/Depot";
        const tempUrl = "api/Template";
        const [depotResp, templateResp]: any = await Promise.all([
          Fetch(depoUrl, { Customer: formData?.custCode }, 5000, true, false),
          Fetch(tempUrl, { Customer: formData?.custCode }, 5000, true, false),
        ]);
        setDepotList(depotResp?.Depot || []);
        setTemplateList(templateResp?.Template || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDepotList([]);
        setTemplateList([]);
      }
    };
    fetchData();
  }, [formData?.custCode]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response: any = await Post("api/WRegisterCodeGroup1", {
        code: "",
        appID: "Worksafe",
        gCode: formData?.code,
        email: formData?.email,
        depot: formData?.depot ?? "",
        customer: formData?.custCode,
      });
      if (response?.status) setScreen("login");
    } catch (error) {
      setErrors({ depot: "", template: "" });
      console.log("Register error: " + error);
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
              src="https://www.worksafeonline.co.uk/LogoImages/WorksafeHeader.png"
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
            Your code is registered with the following account. Please select
            continue to register:
          </p>
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="text-center text-sm bg-primary rounded-full text-black cursor-not-allowed py-2">
            {formData?.custCode} {formData?.custName}
          </div>
          <p className="text-center text-lg py-4 text-white/80">
            Please select below to continue
          </p>
          <div className="mb-6">
            <select
              name="depot"
              // required
              onChange={handleChange}
              value={formData.depot || ""}
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.depot ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            >
              <option value="" disabled>
                Select Depot
              </option>
              {depotList.length > 0 &&
                depotList.map((depot: any, index) => (
                  <option
                    key={index}
                    value={depot?.Depot}
                    className="text-black"
                  >
                    {depot?.Name}
                  </option>
                ))}
            </select>
            {errors.depot && (
              <p className="text-red-500 text-sm mt-1">{errors.depot}</p>
            )}
          </div>

          <div className="mb-6">
            <select
              name="template"
              // required
              onChange={handleChange}
              value={formData.template || ""}
              className={`w-full p-2 border-b text-white outline-none bg-transparent ${
                errors.template ? "border-red-500" : "border-gray-300"
              } focus:ring-primary focus:border-primary`}
            >
              <option value="" disabled>
                Select Template
              </option>
              {templateList.length > 0 &&
                templateList.map((template: any, index) => (
                  <option
                    key={index}
                    className="text-black"
                    value={template.Template}
                  >
                    {template?.Description}
                  </option>
                ))}
            </select>
            {errors.template && (
              <p className="text-red-500 text-sm mt-1">{errors.template}</p>
            )}
          </div>

          <button
            type="submit"
            className={`w-full py-2 px-4 bg-primary text-black uppercase rounded-full shadow-md text-lg font-bold hover:bg-primary/80 transition outline-none ${bigShoulders.className}`}
          >
            Continue
          </button>
          <p className="text-xs mt-2 text-center text-white/60">
            I have read & agree to the{" "}
            <Link href={"/terms-and-conditions"} className="underline">
              terms & conditions
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterAccount;
