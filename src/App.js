import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Ativ1 from "./pages/atividade1/ativ1";
import Ativ2 from "./pages/atividade2/ativ2";
import Ativ3 from "./pages/atividade3/Atv03";
import Ativ4 from "./pages/atividade4/Atv04";
import Navbar from "./Layout/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividade1" element={<Ativ1 />} />
        <Route path="/atividade2" element={<Ativ2 />} />
        <Route path="/atividade3" element={<Ativ3 />} />
        <Route path="/atividade4" element={<Ativ4 />} />
      </Routes>
    </BrowserRouter>
  );
}
