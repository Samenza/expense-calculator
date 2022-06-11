import axios from "axios";
// baseURL: "https://expense-calculator-production.up.railway.app",
export const api = axios.create({
  baseURL: "http://192.168.1.161:4000",
});
