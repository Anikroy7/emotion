import { createBrowserRouter } from "react-router-dom";
import Main from "../Pages/Main/Main";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
