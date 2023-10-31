import { Route, Routes } from "react-router-dom";
import Root from "./features/root.tsx";
import Index from "./features/index.tsx";
import Reservations from "@/features/reservations/index.tsx";

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
