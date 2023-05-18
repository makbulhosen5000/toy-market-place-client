import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layouts/Main";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        errorElement:<NotFound/>,
        children:[
            {
                'path':'/',
                element:<Home/>
            },
            {
                'path':'services',

            }
        ]
    }
])

export default router;