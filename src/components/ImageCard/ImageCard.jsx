import css from "./ImageCard.module.css";

const ImageCard = ({ alt, url }) => {
  return <img className={css.img} src={url} alt={alt} />;
};

export default ImageCard;
