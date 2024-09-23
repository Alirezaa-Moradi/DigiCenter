import { useMutation } from "@tanstack/react-query";
import Axios from "../api/instance";
import { Post } from "./../api/post";
import { Patch } from "../api/patch";
import { Delete } from "./../api/delete";

const useMuatationQuery = (url, body, key) => {
  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async () => {
      const response = await Post(url, body);
      return response;
    },
  });
  return mutation;
};

export default useMuatationQuery;
