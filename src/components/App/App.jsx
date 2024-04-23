import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import { useEffect, useState } from "react";

import "./App.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import useToggle from "../../hooks/useToggle";

const Images = () => {
  const { isOpen, open, close } = useToggle();
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  useEffect(() => {
    if (!query) return;

    const imagesFromApi = async () => {
      try {
        setLoading(true);
        const results = await getImages(page, query);
        setImages((prevImages) => [...prevImages, ...results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setLoading(false);
      }
    };
    imagesFromApi();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery images={images} onClick={open} />
      <ImageModal visible={isOpen} onClose={close} />
      {loading && <p>Loading data, please wait...</p>}
      {isError && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
      {images.length > 0 && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}
    </>
  );
};

export default Images;
