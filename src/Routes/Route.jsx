import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ComingSoon from "../shared/ComingSoon/ComingSoon";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      
        
        {
          path: "ComingSoon",
          element: <ComingSoon></ComingSoon>,
        },
    ],
  },
]);
