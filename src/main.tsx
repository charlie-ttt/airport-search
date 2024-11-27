import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./index.css";
import Airport from "./pages/Airport.tsx";
import Twitter from "./pages/Twitter.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav>
          <ul>
            <li>
              <Link to={`twitter`}>Twitter</Link>
            </li>
            <li>
              <Link to={`twitter`}>Airport</Link>
            </li>
          </ul>
        </nav>
      </div>
    ),
  },
  {
    path: "/airport",
    element: <Airport />,
  },
  {
    path: "/twitter",
    element: <Twitter />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
