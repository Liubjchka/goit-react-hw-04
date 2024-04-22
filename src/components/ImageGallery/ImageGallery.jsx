import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";
import { AiOutlineLike } from "react-icons/ai";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ul}>
      {images.map(({ id, alt_description, urls, likes, created_at }) => {
        return (
          <li className={css.li} key={id}>
            <ImageCard
              alt={alt_description}
              url={urls.small}
              // urlLarge={urls.regular}
              likes={likes}
              created_at={created_at}
            />
            <div className={css.info}>
              <p>
                {likes} <AiOutlineLike />
              </p>
              <p>{created_at}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
