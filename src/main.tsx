import React from 'react'
import ReactDOM from 'react-dom/client'
import {reservationsApi} from "@/features/apiSlice.ts";
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App.tsx";
import './index.css'
import './i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ApiProvider api={reservationsApi}>
          <BrowserRouter>
              <Routes>
                  <Route path="/*" element={<App />} />
              </Routes>
          </BrowserRouter>
      </ApiProvider>
  </React.StrictMode>,
)
