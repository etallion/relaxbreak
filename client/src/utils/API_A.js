import axios from "axios";

export default {
   // Gets all Answers
   getAnswers: function(id) {
    return axios.get("/api/answers");
  },
  // Gets the Answer with the given id
  getAnswer: function(id) {
    return axios.get("/api/answers/" + id);
  },
  // Deletes the book with the given id
  deleteAnswer: function(id) {
    return axios.delete("/api/answers/" + id);
  },
  // Saves a book to the database
  saveAnswers: function(AnswerData, id) {
    return axios.post("/api/answers/" + id, AnswerData);
  },
  // Saves a book to the database
  updateAnswers: function(AnswerData, id) {
    return axios.put("/api/answers/" + id, AnswerData);
  }
};
