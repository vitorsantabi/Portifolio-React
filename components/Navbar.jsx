import { Link } from "react-router-dom";
import "./nav.css";
export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <ul className="flex justify-center gap-6 text-lg">
     
        <li>
          <Link to="/" className="hover:text-teal-400">Sobre Mim</Link>
        </li>
        <li>
          <Link to="/projetos" className="hover:text-teal-400">Projetos</Link>
        </li>
        <li>
          <Link to="/redes" className="hover:text-teal-400">Redes Sociais</Link>
        </li>
      </ul>
    </nav>
  );
}
