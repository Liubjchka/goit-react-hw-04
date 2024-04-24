import "./App.css";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import ImageGallery from "../ImageGallery/ImageGallery";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import toast from "react-hot-toast";
// import { LastPage } from "../LastPage/LastPage";
// import { ErrorMessage } from "formik";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [visible, setVisible] = useState(false);
  // const [totalPages, setTotalPages] = useState(1);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoading(false);
    setIsError(false);
    setOpenModal(false);
    // setVisible(false);
  };

  useEffect(() => {
    if (!query) return;

    const imagesFromApi = async () => {
      try {
        setLoading(true);
        const results = await getImages(page, query);
        console.log(results);
        setImages((prevImages) => [...prevImages, ...results]);
        // setVisible(images.length === results.total);
        //setVisible(page < results.total_pages)
      } catch (error) {
        setIsError(true);
        toast.error("Whoops, something went wrong!", {
          duration: 4000,
          position: "top-center",
        });
      } finally {
        setLoading(false);
      }
    };
    imagesFromApi();
  }, [page, query]);

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery images={images} onOpenModal={handleOpenModal} />
      {openModal && (
        <ImageModal
          onClose={handleCloseModal}
          images={images}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          url={images.urls.regular}
          alt={images.alt_description}
        />
      )}

      {!images.length && <p>Let`s begin search...</p>}

      {loading && <p>Loading data, please wait...</p>}
      {/* {isError && <ErrorMessage />} */}
      {isError && <p>Oops! Something went wrong.</p>}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}

      {/* {images.length && page !== total && <LastPage />} */}
    </>
  );
};

export default App;
