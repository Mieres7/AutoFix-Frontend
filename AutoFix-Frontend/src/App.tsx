import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import { Repairs } from "./pages/Repairs";
import { Reports } from "./pages/Reports";
import History from "./pages/History";
import { RepairList } from "./pages/RepairList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/repairs" element={<Repairs />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} />
          <Route path="/repairlist" element={<RepairList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
