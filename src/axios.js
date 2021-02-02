import axios from "axios";

// base url to make requests o the movie databse
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;