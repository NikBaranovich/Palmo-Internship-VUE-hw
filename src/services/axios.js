import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://fakestoreapi.com/",
  headers:{
    'Content-Type': 'application/json'
  }
});

export default axiosInstanse;