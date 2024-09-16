import instance from "./instance";

export const Post = async (url, body = {}) => {
  try {
    const response = await instance.post(url, body);
    return response?.data;
  } catch (err) {
    return null;
  }
};
