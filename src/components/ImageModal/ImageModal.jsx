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
    border: "none",
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

const ImageModal = ({ isOpen, onClose, urlLarge, alt }) => {
  return (
    <div className={css.modal}>
      <Modal
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldFocusAfterRender={true}
        preventScroll={false}
        shouldCloseOnEsc={true}
        shouldCloseOnOverlayClick={true}
        shouldReturnFocusAfterClose={true}
      >
        <img src={urlLarge} alt={alt} className={css.img} />
      </Modal>
    </div>
  );
};

export default ImageModal;

//https://reactcommunity.org/react-modal/
//Modal window
