import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Root from "./pages/root.tsx";
import Reservations from "./pages/reservations.tsx"
import './index.css'

import './i18n';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "reservations",
                element: <Reservations />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
