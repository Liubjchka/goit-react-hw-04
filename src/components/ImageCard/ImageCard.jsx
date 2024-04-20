import css from "./ImageCard.module.css";

const ImageCard = ({ alt, url }) => {
  return (
    <img
      className={css.img}
      // style={{ backgroundColor: color, borderColor: color }}
      src={url}
      alt={alt}
    />
  );
};

export default ImageCard;
