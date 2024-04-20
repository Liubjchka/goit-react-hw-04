import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(
        ({ id, alt_description, urls, color, likes, promoted_at }) => {
          return (
            <li key={id}>
              <ImageCard
                alt={alt_description}
                url={urls.small}
                // urlLarge={urls.regular}

                color={color}
                likes={likes}
                promoted_at={promoted_at}
              />
              <p>{likes}</p>
              <p>{promoted_at``}</p>
              <p>{alt_description}</p>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default ImageGallery;
