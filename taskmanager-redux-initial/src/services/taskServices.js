import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:3001/tasks" });

export const fetchTasks = async () => {
  const res = await api.get("/");
  return res.data;
};
