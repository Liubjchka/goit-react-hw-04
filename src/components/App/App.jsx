import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import { useEffect, useState } from "react";

import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";

const Images = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    const imagesFromApi = async () => {
      try {
        const results = await getImages(page, query);
        if (results && Array.isArray(results)) {
          setImages((prevImages) => [...prevImages, ...results]);
        } else {
          console.log("No results found or results is not iterable");
        }
        //Uncaught TypeError: results is not iterable    Why?
        //Cannot read properties of undefined (reading 'results')
        //Проблема була у фігурних дужках в Results
      } catch (error) {
        console.log(error.message);
      }
    };
    imagesFromApi();
  }, [page, query]);

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery images={images} />
    </>
  );
};

export default Images;
