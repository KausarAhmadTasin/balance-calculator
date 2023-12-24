import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage/HomePage";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Auth/Login";
import Signup from "../pages/Auth/Signup";
import Users from "../pages/Users/Users";
import { UserDetail } from "../components/UserDetail/UserDetail";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/users",
        element: (
          <privateRoutes>
            <Users />
          </privateRoutes>
        ),
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        errorElement: <NotFound />,
      },
      {
        path: "/users/:userId",
        element: <UserDetail />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        errorElement: <ErrorPage />, // errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
