import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <nav  id="caixa">
      <div id="posição_superior">
        <Link to="">Clientes</Link>
        <Link to="">Barbeiros</Link>
      </div>
      <div>
        <Link to={""}>Criar usuário</Link>
      </div>

      <div>
        <Link to={""}>User</Link>
      </div>
    </nav>
  );
}

export default Sidebar;
