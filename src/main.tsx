import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
// import {
//     createBrowserRouter,
//     RouterProvider,
// } from "react-router-dom";
// import Root from "./pages/root.tsx";
// import Reservations from "@/pages/reservations/index.tsx";
import './index.css'

import './i18n';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Root />,
//         children: [
//             {
//                 path: "reservations",
//                 element: <Reservations />
//             }
//         ],
//     },
// ]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/*<RouterProvider router={router} />*/}
      <BrowserRouter>
          <Routes>
              <Route path="/*" element={<App />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>,
)
