import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
  return (
    <div>
      <ul>
        {/* Набір елементів списку із зображеннями */}
        <li>
          <ImageCard />
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
