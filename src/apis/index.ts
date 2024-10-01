import Axios from "axios";

Axios.defaults.headers.get["Pragma"] = "no-cache";
Axios.defaults.headers.get["Cache-Control"] = "no-cache, no-store";

const apiUrl = import.meta.env.VITE_API_URL;
const API_BASE = `${apiUrl}/api`;

const instance = Axios.create({
  baseURL: `${API_BASE}`,
});

export const fetchGenerateResponseRequest = async (prompt: string) => {
  const { data } = await instance.get("/generate", {
    params: {
      prompt,
    },
  });
  console.log("data", data);
  return data;
};
