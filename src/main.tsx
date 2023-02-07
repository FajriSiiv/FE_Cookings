import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import axios from "axios";
import Layout from "./components/Layout/Layout";
import Cookings from "./pages/Cookings";
import Detail from "./pages/Detail";
import CreateCooking from "./pages/Dashboard/Create";
import EditCooking from "./pages/Dashboard/Edit";

axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <Layout>
        <Dashboard />
      </Layout>
    ),
  },
  {
    path: "/cookings",
    element: (
      <Layout>
        <Cookings />
      </Layout>
    ),
  },
  {
    path: "/cooking/:id",
    element: (
      <Layout>
        <Detail />
      </Layout>
    ),
  },
  {
    path: "/create",
    element: (
      <Layout>
        <CreateCooking />
      </Layout>
    ),
  },
  {
    path: "/edit/:id",
    element: (
      <Layout>
        <EditCooking />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
