export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://arrangy.com/api"
    : "http://localhost:3000/api/";
export default API_URL;