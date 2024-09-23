import Axios from "./instance";

export const Patch = async (url, body) => {
  try {
    const response = Axios.patch(url, body);
    return response;
  } catch (error) {
    return null;
  }
};
