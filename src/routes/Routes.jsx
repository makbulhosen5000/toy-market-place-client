import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Blog from "../pages/Home/Blog/Blog";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import AllToys from "../pages/Home/AllToys/AllToys";
import MyToys from "../pages/Home/MyToys/MyToys";
import AllToyDetails from "../pages/Home/AllToys/AllToyDetails";
import PrivateRoutes from "./PrivateRoutes";
import CreateMyToy from "../pages/Home/MyToys/CreateMyToy";



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
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      {
        path: "all-toys",
        element: (
          <PrivateRoutes>
            <AllToys />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/toys"),
      },
      {
        path: "allToyDetails/:id",
        element: <AllToyDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/toys/${params.id}`),
      },

      {
        path: "my-toys",
        element: (
          <PrivateRoutes>
            <MyToys />,
          </PrivateRoutes>
        ),
      },
      {
        path:'create-my-toy',
        element:<CreateMyToy/>
      }
    ],
  },
]);

export default router;