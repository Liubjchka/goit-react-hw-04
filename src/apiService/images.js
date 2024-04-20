import axios from "axios";

const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";

export const getImages = async (page, query) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}`
    );

    console.log(data);

    if (data && data.results) {
      return data.results;
    } else {
      throw new Error("No results found");
    }
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API");
  }
};
