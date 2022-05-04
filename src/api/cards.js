import axios from "axios";

export default axios.create({
  baseUrl: "http://localhost:8080",
  //   baseURL: "https://api.spaceflightnewsapi.net/v3",
});
