import axios from "axios";

export default {
   // Gets all Answers
   getAnswers: function() {
    return axios.get("/api/Answers");
  },
  // Gets the Answer with the given id
  getAnswer: function(id) {
    return axios.get("/api/Answers/" + id);
  },
  // Deletes the book with the given id
  deleteAnswer: function(id) {
    return axios.delete("/api/Answers/" + id);
  },
  // Saves a book to the database
  saveAnswers: function(AnswerData) {
    return axios.post("/api/Answers", AnswerData);
  }
};
