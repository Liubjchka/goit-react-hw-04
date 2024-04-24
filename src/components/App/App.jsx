import "./App.css";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import ImageGallery from "../ImageGallery/ImageGallery";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
// import toast from "react-hot-toast";
import Loader from "../Loader/Loader";
import { LastPage } from "../LastPage/LastPage";
import { ErrorMessage } from "formik";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState({ url: "", alt: "" });
  const [totalPages, setTotalPages] = useState(1);
  const [visible, setVisible] = useState(false);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoading(false);
    setIsError(false);
    setOpenModal(false);
    setIsOpen({ url: "", alt: "" });
    setTotalPages(1);
    setVisible(false);
  };

  useEffect(() => {
    if (!query) return;

    const imagesFromApi = async () => {
      try {
        setLoading(true);
        const { results, total_pages } = await getImages(page, query);
        console.log(results);
        setImages((prevImages) => [...prevImages, ...results]);
        setTotalPages(total_pages);
        setIsError(false);
        setVisible(page < total_pages);
        // setOpenModal(true);
        // setIsOpen({ url: results.urls.regular, alt: results.alt_description });
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

  const handleOpenModal = (urls, alt_description) => {
    setIsOpen({ url: urls, alt: alt_description });

    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery images={images} onClick={handleOpenModal} />

      {openModal && (
        <ImageModal
          openModal={openModal}
          onClose={handleCloseModal}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          url={isOpen.url}
          alt={isOpen.alt}
        />
      )}

      {isError && <ErrorMessage />}

      {!images.length && <p>Let`s begin search...</p>}

      {loading && (
        <p>
          <Loader />
          Loading data, please wait...
        </p>
      )}
      {/* {Loader works} */}

      {isError && <ErrorMessage />}

      {isError && <p>Oops! Something went wrong.</p>}
      {images.length > 0 && visible && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}
      {/* {LoadMore works} */}
      {/* {Виконується останній true або перший false} */}

      {page === totalPages && page !== 1 && <LastPage />}
      {/* {LastPage works} */}
    </>
  );
};

export default App;
