import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./app";
import ErrorElement from "./utils/errorpage";

import "./main.css";
import DisplayProjects from "./routes/projects";

const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/home",
        index: true,
      },
      {
        path: "/project",
        element: <DisplayProjects />,
      },
      {
        path: "/recent",
        element: <h1>Recent Project</h1>,
      },
      {
        path: "/draft",
        element: <h1>Drafts</h1>,
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>,
      },
      {
        path: "/support",
        element: <h1>Support centre</h1>,
      },
      {
        path: "/report",
        element: <h1>Report a problem</h1>,
      },
      {
        path: "/yesiam",
        element: <h1>Yes I am</h1>,
      },
      {
        path: "/design",
        element: <h1>Designs</h1>,
      },
      {
        path: "/moodboard",
        element: <h1>Moodboard</h1>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
