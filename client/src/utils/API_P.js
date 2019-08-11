import axios from "axios";

export default {
  getPersonalities: function() {
    return axios.get("/api/personalities");
  },
  updatePersonality: function(updateInfo) {
    return axios.put("/api/personalities", updateInfo);
  }
};
