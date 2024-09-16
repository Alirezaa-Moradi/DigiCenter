import axios from "axios";
import Axios from "./instance";

export const Get = async (url, params = {}) => {
  try {
    const response = await Axios.get(url);
    return response?.data;
  } catch (err) {
    return null;
  }
};
