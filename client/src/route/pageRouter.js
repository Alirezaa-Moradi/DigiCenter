import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import Layout from "../layout";
import ProductPage from "../pages/productPage";
import StorPage from "../pages/StorePage";

const PageRouter = () => {
  const router = createBrowserRouter([
    2 > 1
      ? {
          element: <Layout />,
          path: "/",
          children: [
            {
              element: <Home />,
              path: "home",
            },
            {
              element: <StorPage />,
              path: "store",
            },
            {
              path: "product/:id",
              element: <ProductPage />,
            },
          ],
        }
      : {
          element: <Login />,
          path: "login",
        },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default PageRouter;
