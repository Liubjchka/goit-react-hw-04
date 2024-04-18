// import { useState } from "react";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
  // const [query, setQuery] = useState("");

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
