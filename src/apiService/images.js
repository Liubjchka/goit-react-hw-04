import axios from "axios";

const API_KEY = "uFwH4fdMNd8GZx3KXV2zP6cZrDYT9wqBDv039lyrpUU";
const params = {
  orientation: "landscape",
  per_page: 12,
};

export const getImages = async (page, query) => {
  try {
    const { data } = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${API_KEY}&page=${page}&query=${query}`,
      { params }
    );

    // console.log(data);

    return data;
  } catch (error) {
    throw new Error("Failed to fetch images from Unsplash API");
  }
};
