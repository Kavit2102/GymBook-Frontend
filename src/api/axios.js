import axios from "axios";

function getHeaders() {
  return {
    Authorization: `Bearer ${localStorage.getItem("token_status")}`,
    "Content-Type": "application/json"
  };
}

// we need to pass the baseURL as an object
const Axiosinstance = axios.create({
  baseURL: "http://localhost:5000/api/gymbook",
  headers: getHeaders(),
});

export default Axiosinstance;
