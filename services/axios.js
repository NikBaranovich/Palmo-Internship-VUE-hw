/**
 * Lesson 3 Task 2: Add axios library to the project using package manager. 
 * Create an axios instance in a separate file, configure it, and import it as needed.
 */
import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://translate.googleapis.com/translate_a",
  headers:{
    'Content-Type': 'application/json'
  }
});

export default axiosInstanse;