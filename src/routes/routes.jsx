import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";
import Login from "../Pages/auth/Login";
import Signup from "../Pages/auth/Signup";
import Home from "../Pages/Home/Home";
import Media from "../Pages/Media/Media";
import About from "../Pages/About/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

export default routes;
