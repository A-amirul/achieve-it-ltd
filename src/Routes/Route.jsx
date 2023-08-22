import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/Home";
import Main from "../Layouts/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AboutSection from "../pages/AboutSection/AboutSection";
import ContactUs from "../pages/ContactUs/ContactUs";
import ComingSoon from "../shared/ComingSoon/ComingSoon";
import Blogs from "../pages/BlogSection/Blogs";

import Career from "../pages/Career/Career";
import JobPost from "../pages/JobPost/JobPost";

import FocusAreas from "../pages/FocusAreas/FocusAreas";

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
        path: "about",
        element: <AboutSection></AboutSection>,
      },
      {
        path: "ComingSoon",
        element: <ComingSoon></ComingSoon>,
      },

      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "career",
        element: <Career></Career>,
      },
      {
        path: "jobPost",
        element: <JobPost></JobPost>,
      },
      {
        path: "focusarea",
        element: <FocusAreas></FocusAreas>,
      },
    ],
  },
]);
