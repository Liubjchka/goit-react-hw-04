import "./App.css";

import { useEffect, useState } from "react";

import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import ImageGallery from "../ImageGallery/ImageGallery";
import { LoadMoreBtn } from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loader from "../Loader/Loader";
import { LastPage } from "../LastPage/LastPage";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../ErrorMessage/ErrorMessage";


const App = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [isOpen, setIsOpen] = useState({ url: "", alt: "" });
  const [totalPages, setTotalPages] = useState(1);
  const [visible, setVisible] = useState(false);
  const [empty, setEmpty] = useState(true);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setLoading(false);
    setError(false);
    setOpenModal(false);
    setIsOpen({ url: "", alt: "" });
    setTotalPages(1);
    setVisible(false);
    setEmpty(false);
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
        setError(false);
        setVisible(page < total_pages);
      } catch (error) {
        setError(true);
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

  const onEmptyString = () => {
    toast.error("Whoops, something went wrong!", {
      duration: 4000,
      position: "top-right",
    });
  };

  return (
    <>
      <Toaster reverseOrder={false} />

      <SearchBar onSubmit={onFormSubmit} onEmpty={onEmptyString} />
      <ImageGallery images={images} onOpenModal={handleOpenModal} />

      {error && <ErrorMessage />}

      {openModal && (
        <ImageModal
          isOpen={openModal}
          onClose={handleCloseModal}
          urlLarge={isOpen.url}
          alt={isOpen.alt}
        />
      )}

      {/* {!images.length && empty && <p>Let`s begin search...</p>} */}
      {loading && (
        <div>
          <Loader />
          <p>
          Loading data, please wait...
        </p>
        </div>
      )}
      {!images.length && !empty && !loading && <p>There are no images...</p>}
      {images.length > 0 && visible && (
        <LoadMoreBtn onClick={onLoadMore}>Load more</LoadMoreBtn>
      )}
      {/* {Виконується останній true або перший false} */}
      {page === totalPages && page !== 1 && <LastPage />}
    </>
  );
};

export default App;
