import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

export const signupUser = (data) => API.post("/auth/register", data);
export const loginUser = (data) => API.post("/auth/login", data);

export const chatWithAI = (data) =>API.post("/ai/chat", data);


export default API;