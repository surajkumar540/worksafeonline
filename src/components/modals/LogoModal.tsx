import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";

const LogoModal = ({
  onclose,
  isVisible,
}: {
  onclose: any;
  isVisible: boolean;
}) => {
  return (
    <Modal
      onClose={onclose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-3/5"
      showCloseButton={false}
    >
      <div className="relative text-white h-[400px]">
        <RxCross1
          size={24}
          onClick={onclose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 absolute top-2 z-20 right-3 text-black"
        />
      </div>
    </Modal>
  );
};

export default LogoModal;
