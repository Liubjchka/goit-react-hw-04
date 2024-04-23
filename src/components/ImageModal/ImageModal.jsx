import css from "./ImageModal.module.css";

const ImageModal = ({ alt, url }) => {
  return <img className={css.img} src={url} alt={alt} />;
};

export default ImageModal;
