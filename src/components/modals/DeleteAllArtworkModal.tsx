import Modal from "../common/Modal";

const DeleteAllArtworkModal = ({
  onClose,
  onDelete,
  isVisible,
}: {
  onClose: any;
  onDelete: any;
  isVisible: boolean;
}) => {
  return (
    <Modal
      onClose={onClose}
      removePadding={true}
      isVisible={isVisible}
      width="w-[90%] lg:w-[424px]"
      showCloseButton={false}
    >
      <div className="relative flex flex-col justify-center items-center p-6 min-h-40">
        {/* Modal Content */}
        <h2 className="text-3xl mt-2 font-semibold text-center">
          Are you sure you want to delete all artwork? <br />
          <span className="text-sm font-light text-gray-400">
            Disclaimer: This action cannot be undone.
          </span>
        </h2>

        {/* Buttons */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-primary/80 text-black font-semibold rounded-lg hover:bg-primary transition"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteAllArtworkModal;
