import axios from "axios";
export default axios.create({
  baseURL: "https://backend-x6z8.vercel.app/",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json;charset=UTF-8"
  },
});
