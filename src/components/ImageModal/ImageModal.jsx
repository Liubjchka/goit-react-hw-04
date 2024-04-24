import css from "./ImageModal.module.css";
import Modal from "react-modal";

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: "none",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
};

const ImageModal = ({ openModal, onClose, url, alt }) => {
  return (
    <div className={css.modalBackdrop}>
      <Modal
        style={customStyles}
        isOpen={openModal}
        onClose={onClose}
        className={css.modalContent}
        shouldReturnFocusAfterClose={false}
      >
        <img src={url} alt={alt} className={css.img} />
      </Modal>
    </div>
  );
};

export default ImageModal;
