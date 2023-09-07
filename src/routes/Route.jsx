import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/Mainlayout";
import Home from "../pages/home/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        }
      ]
    },
  ]);

export default router;  