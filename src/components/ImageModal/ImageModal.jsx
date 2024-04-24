import css from "./ImageModal.module.css";

const ImageModal = ({ url, alt, onClose }) => {
  return (
    <div className={css.modalBackdrop} onClick={onClose}>
      <div className={css.modalContent}>
        <img src={url} alt={alt} className={css.img} />
      </div>
    </div>
  );
};

export default ImageModal;
