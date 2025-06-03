import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Home from "../pages/Home";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";

function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "register", element: <Register /> },
      { path: "logIn", element: <LogIn /> },
    //   { path: "Pages", element: <Pages /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;