import axios from "axios";

export default {
  getBooks: function(query) {
    console.log(query);
    return axios.get("/api/books", { params: { q: query } });
  }
};