import { useMutation } from "@tanstack/react-query";
import Axios from "../api/instance";
import { Post } from "./../api/post";
import { Patch } from "../api/patch";
import { Delete } from "./../api/delete";

const useMuatationQuery = () => {
  const mutation = useMutation({
    mutationFn: async (params) => {
      const url = params.url;
      const body = params.body || null;
      const method = params.method;
      const key = params.key;

      switch (method) {
        case "post": {
          const response = await Post(url, body);
          return response;
        }
        case "patch": {
          const response = await Patch(url, body);
          return response;
        }
        case "delete": {
          const response = await Delete(url);
          return response;
        }
        default:
          break;
      }
    },
  });
  return mutation;
};

export default useMuatationQuery;

// const a = useMuatationQuery("post", "products", { name: "mahdi2" }, "products");
// a.mutate();
