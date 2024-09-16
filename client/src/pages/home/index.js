import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Get } from "../../utils/api/get";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Post } from "../../utils/api/post";

const Home = () => {
  //simple use get

  const getHandler = async () => {
    const res = await Get("products");
    return res;
  };

  const { data } = useQuery({
    queryKey: "simple-get",
    queryFn: getHandler,
  });

  console.log(data);

  //

  //Simple use Post

  const PostHandler = async () => {
    const newProuduct = {
      name: "mobile1",
      id: Date.now(),
      price: 20000000,
    };
    await Post("products", newProuduct);
  };

  const postMutation = useMutation({
    mutationFn: PostHandler,
    mutationKey: "simple-post",
  });

  useEffect(() => {
    setTimeout(() => {
      postMutation.mutate();
    }, 3000);
  }, []);

  //

  return (
    <div>
      Home
      <Outlet />
    </div>
  );
};

export default Home;
