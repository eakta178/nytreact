import axios from "axios";

export default {
  // Gets all articles
  getArticles: function() {
    return axios.get("/api/articles");
  },
  // Gets the article with the given id
  getArticle: function(id) {
    return axios.get("/api/articles/saved" + id);
  },
  // Deletes the article with the given id
  deleteArticle: function(id) {
    return axios.delete(`/api/articles/${id}`);
  },
  // Saves a article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/saved", articleData);
  },

  addNote: function(id, data) {
    console.log('data', data);
    return axios.post("/api/articles/saved/add/"+id, data);
  },

  deleteNote: function(id) {
    return axios.delete("/api/articles/saved/delete/" + id);
  },

  scrape: function(data) {
    return axios.post("/api/articles/scrape", data);
  }
};

