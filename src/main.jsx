import  React from "react";
import  ReactDOM from "react-dom/client";
import {   RouterProvider,} from "react-router-dom";
import router from "./components/route/Route";
import Authprovider from "./components/authprovider/Authprovider";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Authprovider>
      <RouterProvider router={router} />
    </Authprovider>
  </React.StrictMode>
);