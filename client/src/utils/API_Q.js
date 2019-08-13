import axios from "axios";

export default {
   // Gets all questions
   getQuestions: function() {
    return axios.get("/api/questions");
  },
  // Gets the question with the given id
  getQuestion: function(id) {
    return axios.get("/api/questions/" + id);
  },
  // Deletes the book with the given id
  deleteQuestion: function(id) {
    return axios.delete("/api/questions/" + id);
  },
  // Saves a book to the database
  saveQuestion: function(questionData) {
    return axios.post("/api/questions", questionData);
  },
  // Saves a book to the database
  updateQuestion: function(questionData) {
    return axios.put("/api/questions", questionData);
  }
};
