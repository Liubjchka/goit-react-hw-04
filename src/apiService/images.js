import axios from "axios";

const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";
axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
axios.defaults.headers.common["Authorization"] = API_KEY;
axios.defaults.params = {
  per_page: 12,
  order_by: "popular",
  stats: true,
  orientation: "landscape",
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`search?query=${query}&page=${page}`);
  console.log(data);

  return data;
};
