import "./App.css";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import ImageGallery from "../ImageGallery/ImageGallery";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import { LastPage } from "../LastPage/LastPage";
import { ErrorMessage } from "formik";

const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  // const [txt, setTxt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState({ url: "", alt: "" });
  const [totalPages, setTotalPages] = useState(1);
  const [visible, setVisible] = useState(false);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoading(false);
    setError("");
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
        setError("");
        setVisible(page < total_pages);
      } catch (error) {
        setError(error.ErrorMessage);
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

  //Лише букви для введення
  // const onInputChange = (event) => {
  //   const { value } = event.target;
  //   console.log("Input value: ", value);

  //   const re = /^[A-Za-z]+$/;
  //   if (value === "" || re.test(value)) {
  //     setTxt(value);
  //   }
  // };

  return (
    <>
      <SearchBar onSubmit={onFormSubmit} />
      <ImageGallery images={images} onOpenModal={handleOpenModal} />

      {openModal && (
        <ImageModal
          isOpen={openModal}
          onClose={handleCloseModal}
          // aria-labelledby="modal-modal-title"
          // aria-describedby="modal-modal-description"
          urlLarge={isOpen.url}
          alt={isOpen.alt}
        />
      )}

      {error && <ErrorMessage />}

      {!images.length && <p>Let`s begin search...</p>}

      {loading && (
        <p>
          <Loader />
          Loading data, please wait...
        </p>
      )}
      {/* {Loader works} */}

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
