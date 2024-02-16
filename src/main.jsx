import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Profile from "./components/Profile";
import Cart from "./components/Cart";
import Error from "./components/Error";
import Header from "./components/Header";

/**
 * routing
 */
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Login />
      </>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
  {
    path: "/home",
    element: (
      <>
        <Header />
        <ProtectedRoutes element={Home} />
      </>
    ),
  },
  {
    path: "/cart",
    element: (
      <>
        <Header />
        <ProtectedRoutes element={Cart} />
      </>
    ),
  },
  {
    path: "/profile",
    element: (
      <>
        <Header />
        <ProtectedRoutes element={Profile} />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <ToastContainer
      position="bottom-left"
      autoClose={5000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      transition:Flip
    />
  </>
);
