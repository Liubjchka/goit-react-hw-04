import axios from "axios";

const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";

export const getImages = async (page, query) => {
  try {
    const response = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}`
    );

    if (response) {
      return response;
    } else {
      throw new Error("Unexpected results format");
    }
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API");
  }
};
