import axios from "axios";

export default {
   // Gets all questions
   getPlaces: function(query) {
    return axios.get("/api/places", query);
  }
};
