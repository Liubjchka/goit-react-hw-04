import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../apiService/images";
import { useEffect, useState } from "react";

import "./App.css";

const Images = () => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const onFormSubmit = (query) => {
    setQuery(query);
    setPage(1);
  };

  useEffect(() => {
    const imagesFromApi = async () => {
      try {
        const images = await getImages(query, page);
        console.log(images);
      } catch (error) {
        console.log(error.message);
      }
    };
    imagesFromApi();
  }, [query, page]);

  return (
    <div>
      <SearchBar onSubmit={onFormSubmit} />
    </div>
  );
};

export default Images;
