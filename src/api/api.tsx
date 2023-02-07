import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = "http://localhost:5000" || "https://backend-cooking.vercel.app";

const apiUrl = axios.create({
  baseURL: baseUrl,
  // PENTING!!!! HARUS ADA SAAT PEMANGGILAN LEWAT REACT-QUERY
  withCredentials: true,
});

export const loginUser = async (user: any) => {
  return await apiUrl.post(`/login`, user);
};

export const logoutUser = async (user: any) => {
  return await apiUrl.delete("/logout", user);
};
