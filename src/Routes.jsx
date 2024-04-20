import { createBrowserRouter } from "react-router-dom";
import { Root } from "./layout/Root";
import { Login } from "./Pages/Login";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Register } from "./Pages/Register";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/login",
        element: <Login />,
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
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
