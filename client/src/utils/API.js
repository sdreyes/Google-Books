import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: query } });
  },
  getSavedBooks: function() {
      return axios.get("/api/saved");
  },
  deleteSavedBook: function(id) {
      return axios.delete(`/api/saved/${id}`);
  },
  saveBook: function(bookData) {
      return axios.post(`/api/saved${bookData}`);
  }
};