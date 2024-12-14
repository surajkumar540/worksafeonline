import Image from "next/image";
import Code from "./login/Code";
import Login from "./login/Login";
import Modal from "../common/Modal";
import Welcome from "./login/Welcome";
import Register from "./login/Register";
import { RxCross1 } from "react-icons/rx";
import StandardLogin from "./login/StandardLogin";
import RegisterSuccess from "./login/RegisterSuccess";
import RegisterAccount from "./login/RegisterAccount";
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useEffect, useState } from "react";

type AuthFlowProps = {
  initialVisibility?: boolean;
};

const AuthFlow: React.FC<AuthFlowProps> = ({ initialVisibility = true }) => {
  const [screen, setScreen] = useState("welcome");
  const [isVisible, setIsVisible] = useState(initialVisibility);
  const [formData, setFormData] = useState({
    code: "",
    email: "",
    codeName: "",
    custCode: "",
    custName: "",
  });

  const onClose = () => setIsVisible(false);

  useEffect(() => {
    if (isVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const renderComponent = useCallback(() => {
    switch (screen) {
      case "code":
        return (
          <Code
            formData={formData}
            setScreen={setScreen}
            setFormData={setFormData}
          />
        );
      case "login":
        return (
          <Login
            onClose={onClose}
            setScreen={setScreen}
            email={formData?.email}
          />
        );
      case "standardlogin":
        return <StandardLogin setScreen={setScreen} onClose={onClose} />;
      case "welcome":
        return <Welcome setScreen={setScreen} onClose={onClose} />;
      case "register":
        return (
          <Register
            formData={formData}
            setScreen={setScreen}
            setFormData={setFormData}
          />
        );
      case "register2":
        return (
          <RegisterAccount
            formData={formData}
            setScreen={setScreen}
            setFormData={setFormData}
          />
        );
      case "registerSuccess":
        return <RegisterSuccess formData={formData} setScreen={setScreen} />;
      default:
        return <></>;
    }
  }, [screen, formData, setFormData]);

  return (
    <Modal
      onClose={onClose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-3/5"
      showCloseButton={false}
    >
      <div className="relative text-white min-h-[444px] h-[50vh] md:h-[70vh]">
        <RxCross1
          size={24}
          onClick={onClose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 hover:text-primary absolute top-2 z-20 right-3 text-white"
        />
        <Image
          priority
          width={100}
          height={100}
          unoptimized
          alt="Login Banner"
          className="w-full h-full object-cover"
          src="https://demo2.wpopal.com/axetor/wp-content/uploads/2024/01/bc-page.jpg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>
        <div className="absolute inset-0 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="w-full"
            >
              {renderComponent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Modal>
  );
};

export default AuthFlow;
