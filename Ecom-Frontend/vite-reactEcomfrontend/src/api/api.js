
import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_BACK_END_URL}/api`,
  //The code below allows the front-end  to include cookies with the 
  //request it is working with
  withCredentials:true,
});

export default api;

