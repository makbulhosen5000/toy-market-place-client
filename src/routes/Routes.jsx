import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login/>,
      },
      {
        path:'register',
        element: <Register/>
      }
    ],
  },
]);

export default router;