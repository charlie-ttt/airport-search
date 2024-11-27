import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Airport from "./pages/Airport.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <nav>
          <ul>
            <li>
              <a href={`/twitter`}>Twitter</a>
            </li>
            <li>
              <a href={`/airport`}>Airport</a>
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
