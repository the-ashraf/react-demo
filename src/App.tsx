import { Route, Routes } from "react-router-dom";
import Root from "./pages/root.tsx";
import Index from "./pages/index.tsx";
import Reservations from "@/pages/reservations/index.tsx";

function App() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Root />}>
                <Route index element={<Index />} />
                <Route path="/reservations" element={<Reservations />} />
            </Route>
        </Routes>
    </>
  )
}

export default App
