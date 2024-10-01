import Axios from "axios";

Axios.defaults.headers.get["Pragma"] = "no-cache";
Axios.defaults.headers.get["Cache-Control"] = "no-cache, no-store";

const API_BASE = "http://localhost:5001/api";

const instance = Axios.create({
  baseURL: `${API_BASE}`,
});

export const fetchGenerateResponseRequest = async (prompt: string) => {
  const { data } = await instance.get("/generate", {
    params: {
      prompt,
    },
  });
  console.log(data);
  return data;
};
