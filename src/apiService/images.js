import axios from "axios";

export const getImages = async (page, query) => {
  const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";
  axios.defaults.baseURL = "https://api.unsplash.com/search/photos";

  const response = await axios.get(
    `?client_id=${API_KEY}&page=${page}&query=${query}`
  );
  return response.data;
};
