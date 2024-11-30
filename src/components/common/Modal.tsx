import ReactDOM from "react-dom";
import { RxCross1 } from "react-icons/rx";
import { motion } from "framer-motion";

interface ModalProps {
  width?: string;
  isVisible: boolean;
  onClose: () => void;
  showCloseButton?: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  onClose,
  children,
  isVisible,
  width = "w-[95vw] md:w-4/5",
  showCloseButton = true,
}) => {
  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center overflow-hidden justify-center z-50">
      {/* Animated Backdrop */}
      <motion.div
        className="fixed inset-0 bg-white backdrop-blur-lg bg-opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      ></motion.div>

      {/* Modal Content */}
      <motion.div
        className={`bg-opacity-50 backdrop-filter backdrop-blur-lg shadow-lg z-10 rounded-xl relative ${width}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-white overflow-scroll no-scrollbar max-h-[90vh] rounded-xl">
          <p className="w-full flex justify-end items-center p-4 pb-0">
            {showCloseButton && (
              <RxCross1
                size={24}
                className="cursor-pointer text-black"
                onClick={onClose}
              />
            )}
          </p>
          <div className="p-4">{children}</div>
        </div>
      </motion.div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

export default Modal;
