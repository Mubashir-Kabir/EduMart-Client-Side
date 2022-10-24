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
        loader: () => fetch("https://api.itbook.store/1.0/new"),
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
        path: "courses/:id",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "check-out/:id",
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

export default router;
