import axios from "axios";
export const apiUrl = "https://localhost:9001/api";

const useHttps = () => {

  const https = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return {
    https
  };
};

export default useHttps;
