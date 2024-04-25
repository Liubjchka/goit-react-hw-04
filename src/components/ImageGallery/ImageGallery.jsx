import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { AiOutlineLike } from "react-icons/ai";

const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.ul}>
      {images.map(({ id, alt_description, urls, color, likes }) => {
        return (
          <li
            className={css.li}
            key={id}
            style={{ backgroundColor: color, borderColor: color }}
          >
            <ImageCard
              alt={alt_description}
              url={urls.small}
              urlLarge={urls.regular}
              color={color}
              likes={likes}
              onOpenModal={onOpenModal}
            />
            <div className={css.info}>
              <p>
                {likes} <AiOutlineLike />
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
