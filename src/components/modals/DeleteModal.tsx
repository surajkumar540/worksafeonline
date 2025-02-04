import Modal from "../common/Modal";
import { RxCross1 } from "react-icons/rx";

const DeleteModal = ({
  onClose,
  onDelete,
  isVisible,
  deleteModalID,
}: {
  onClose: any;
  onDelete: any;
  isVisible: boolean;
  deleteModalID: any;
}) => {
  return (
    <Modal
      onClose={onClose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-96"
      showCloseButton={false}
    >
      <div className="relative flex flex-col justify-center items-center p-5 min-h-40">
        {/* Close Button */}
        <RxCross1
          size={20}
          onClick={onClose}
          title="Click to close"
          className="cursor-pointer hover:scale-110 absolute top-2 z-20 right-3 text-black"
        />

        {/* Modal Content */}
        <h2 className="text-3xl mt-2 font-semibold text-center">
          Are you sure you want to delete this artwork?
          <br />
          <span className="text-xs font-light text-gray-400">
            Disclaimer: This action cannot be undone.
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={() => onDelete(deleteModalID)}
            className="px-4 py-2 bg-primary/80 text-white font-semibold rounded-lg hover:bg-primary transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-400 text-white font-semibold rounded-lg hover:bg-red-500 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
