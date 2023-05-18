import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layouts/Main";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        element:
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