import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Blog from "../pages/Blog";
import Faq from "../pages/Faq";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDetails from "../pages/CourseDetails";
import Checkout from "../pages/Checkout";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "courses",
        loader: () => fetch("https://edumart-server-side.vercel.app/courses"),
        element: <Courses></Courses>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "faq",
        element: <Faq></Faq>,
      },
      {
        path: "log-in",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "course/:id",
        loader: ({ params }) =>
          fetch(`https://edumart-server-side.vercel.app/courses/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "checkout/:id",
        loader: ({ params }) =>
          fetch(`https://edumart-server-side.vercel.app/courses/${params.id}`),
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
