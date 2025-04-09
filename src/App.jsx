import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import SobreMim from "../components/pages/sobremin/SobreMim";
import Projetos from "../components/pages/projetos/Projetos";
import Redes from "../components/pages/redes/Redes";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<SobreMim />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/redes" element={<Redes />} />
        </Routes>
      </main>
    </Router>
  );
}
