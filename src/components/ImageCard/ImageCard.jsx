import css from "./ImageCard.module.css";

const ImageCard = ({ alt, url, urlLarge, onOpenModal }) => {
  return (
    <img
      className={css.img}
      src={url}
      alt={alt}
      onClick={() => onOpenModal(urlLarge, alt)}
    />
  );
};

export default ImageCard;
