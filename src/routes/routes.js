import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/Categories";
import Login from "../pages/login/Login";
import SingleItem from "../pages/single-item/SingleItem";
import Layout from "../components/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "categories/:categoryID",
        element: <Categories />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "single-item/:id",
        element: <SingleItem />,
      },
    ],
  },
]);

export default router;
