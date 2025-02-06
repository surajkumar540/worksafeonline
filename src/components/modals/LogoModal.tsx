import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";
import ArtworkGallery from "../common/ArtworkGallery";

const LogoModal = ({
  data,
  onclose,
  isVisible,
}: {
  data: any;
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
      <div className="relative text-white">
        <RxCross1
          size={24}
          onClick={onclose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 absolute top-2 z-20 right-3 text-white"
        />
        <div>
          <ArtworkGallery artworks={data} showDeleteButton={true} />
        </div>
      </div>
    </Modal>
  );
};

export default LogoModal;
