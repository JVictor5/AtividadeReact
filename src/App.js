import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Ativ1 from "./pages/atividade1/ativ1";
import Ativ2 from "./pages/atividade2/ativ2";
import Navbar from "./Layout/navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atividade1" element={<Ativ1 />} />
        <Route path="/atividade2" element={<Ativ2 />} />
      </Routes>
    </BrowserRouter>
  );
}
