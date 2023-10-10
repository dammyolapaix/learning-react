import React from "react";

// Import React router dom package
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Root from "./routes/root.jsx";
import AboutPage from "./AboutPage.jsx";

// Like creating an HTLM Page, like about.html, contact.html
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/services",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <AboutPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
