import React from "react";
import { Outlet } from "react-router-dom";
import { StyledHome } from "./style";

const Home = () => {

  return (
    <StyledHome>
      Home
      <Outlet />
    </StyledHome>
  );
};

export default Home;
