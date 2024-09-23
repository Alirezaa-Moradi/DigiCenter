import { useQuery } from "@tanstack/react-query";
import { Get } from "./../api/get";

const useGetQuery = (url, key) => {
  const { data } = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const res = await Get(url);
      return res;
    },
  });
  return data;
};

export default useGetQuery;
