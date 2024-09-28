import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHome } from "./style";
import { Get } from "./../../utils/api/get";
import useMuatationQuery from "./../../utils/hooks/useMuatationQuery";

const Home = () => {
  const newNode = {
    name: "farhad",
    id: Date.now(),
    price: 1111111111111111111,
  };

  const { Posts } = Get("products", "products");
  const mutation = useMuatationQuery();

  const handleCreate = () => {
    const newParams = {
      method: "post",
      url: "products",
      body: newNode,
      key: "products",
    };
    mutation.mutate(newParams);
  };

  return (
    <StyledHome>
      Home
      <button onClick={() => handleCreate()}>Create Post</button>
      {Posts?.map((post) => {
        return <div>{post}</div>;
      })}
      <Outlet />
    </StyledHome>
  );
};

export default Home;
