import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://6527c21b931d71583df15426.mockapi.io/api/v1",
  headers:{
    'Content-Type': 'application/json'
  }
});

export default axiosInstanse;