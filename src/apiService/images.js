import axios from "axios";

const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  orientation: "landscape",
  page: 1,
  per_page: 12,
};

export const getImages = async (page, query) => {
  const { data } = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query}`
  );

  return data;
};
