import React from "react";

// Import React router dom package
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import AboutPage from "./pages/AboutPage.jsx";
import PostPage from "./pages/PostPage.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";

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
  {
    path: "/contact",
    element: <AboutPage />,
  },
  {
    path: "/posts",
    element: <PostPage />,
  },
  {
    path: "/posts/:postId",
    element: <SinglePostPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
