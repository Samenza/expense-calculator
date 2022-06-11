import axios from "axios";
// baseURL: "https://expense-calculator-production.up.railway.app",
export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});
