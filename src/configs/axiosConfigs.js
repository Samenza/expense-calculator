import axios from "axios";

export const api = axios.create({
  baseURL: "https://expense-calculator-production.up.railway.app",
});
