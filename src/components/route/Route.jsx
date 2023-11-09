import "../../index.css";
import { createBrowserRouter } from "react-router-dom";
import Home from "../home/Home";
import Layout from "../layout/Layout";
import Errorpage from "../404errorpage/Errorpage";
import Login from "../login/Login";
import Singup from "../singup/Singup";
import Addblog from "../allpages/addblog/Addblog";
import Allblog from "../allpages/allblog/Allblog";
import Wishlist from "../allpages/wishlist/Wishlist";
import Detailsblog from "../allpages/detailsblog/Detailsblog";
import Privetroute from "../privetroute/Privetroute";
import Featuredblog from "../allpages/featuredblog/Featuredblog";
import Updateblog from "../allpages/updateblog/Updateblog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
      {
        path: "/addblog",
        element: (
          <Privetroute>
            {" "}
            <Addblog></Addblog>{" "}
          </Privetroute>
        ),
      },
      {
        path: "/allblog",
        element: <Allblog></Allblog>,
        loader: () => fetch("https://fotouch-project.web.app/blog"),
      },
      {
        path: "/wishlist",
        element: (
          <Privetroute>
            {" "}
            <Wishlist></Wishlist>{" "}
          </Privetroute>
        ),
        // loader : ()=> fetch('https://fotouch-project.web.app/users')
      },
      {
        path: "/details/:_id",
        element: <Detailsblog></Detailsblog>,
        loader: ({ params }) =>
          fetch(`https://fotouch-project.web.app/users/${params._id}`),
      },
      {
        path: "/blogupdate/:_id",
        element: (
          <Privetroute>
            {" "}
            <Updateblog></Updateblog>{" "}
          </Privetroute>
        ),
        loader: ({ params }) =>
          fetch(`https://fotouch-project.web.app/blog/${params._id}`),
      },
      {
        path: "/fetured",
        element: <Featuredblog></Featuredblog>,
        loader: () => fetch("https://fotouch-project.web.app/blog"),
      },
    ],
  },
]);

export default router;
