import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const signup = async (fullName, email, password) => {
  return axios.post(`${API_URL}/signup`, { fullName, email, password });
};

export const sendOtp = async (email) => {
  return axios.post(`${API_URL}/send-otp`, { email });
};

export const verifyOtp = async (email, otp) => {
  return axios.post(`${API_URL}/verify-otp`, { email, otp });
};

export const login = async (email, password) => {
  return axios.post(`${API_URL}/login`, { email, password });
};
