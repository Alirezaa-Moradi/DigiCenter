import Axios from "./instance";

export const Delete = async (url, params = {}) => {
  try {
    const response = await Axios.delete(url);
    return response;
  } catch (error) {
    return null;
  }
};
