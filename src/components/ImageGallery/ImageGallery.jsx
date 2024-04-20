import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, alt_description, urls }) => {
        return (
          <li key={id}>
            <ImageCard alt={alt_description} url={urls.small} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
