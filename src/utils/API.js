import axios from "axios";
const apiKey = process.env.REACT_APP_OMDB_API_KEY;

export default {
  getSearchByName: function (query) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${query}*&type=movie&page=1`
    );
  },

  getSearchByID: function (query) {
    return axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${query}&type=movie&page=1`
    );
  },
};
