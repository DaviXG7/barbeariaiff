import { Link } from "react-router-dom";
import "./sidebar.css";
import imagem from "../../../imgs/cliente.jpg";

function Sidebar() {
  return (
    <nav className="sidebar">
      <div className="flex sm:flex-col  lg:items-center">
        <Link className="btn m-2 w-28" to="">Clientes{" "}</Link>

        <Link className="btn m-2 w-28" to="">Barbeiros</Link>

        <Link className="btn m-2 w-28" to="">ADM</Link>
          <Link className="btn m-2 w-28 mt-16" to="">Pendentes</Link>
      </div>

      <div className="flex sm:flex-col items-center">
        <Link to={""} className="m-2">
          <img src={imagem} width="80" alt="Imagem de usuário" />
        </Link>
      </div>
    </nav>
  );
}

export default Sidebar;
