import axios from "axios";

// Load base URL from .env
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!; // Non-null assertion since no fallback

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Send onboarding form
export const sendOnboardingForm = async (data: {
  name: string;
  email: string;
  contact: string;
  country: string;
  address: string;
  
}) => {
  const payload = {
    ...data,
    react_app: process.env.NEXT_PUBLIC_APP_UUID, // runtime value
  };
  const res = await api.post("/api/portfolio/form/submit/", payload);
  return res.data;
};

export default api;
