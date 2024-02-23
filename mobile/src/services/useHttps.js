import axios from "axios";

export const apiUrl = "https://intent-wallaby-poorly.ngrok-free.app/api";

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
