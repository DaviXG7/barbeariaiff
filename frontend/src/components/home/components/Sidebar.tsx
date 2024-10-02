import {Link} from "react-router-dom";
import "./sidebar.scss"

function Sidebar() {
    return (
        <nav className="sidebar">
            <div>
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
    )
}

export default Sidebar;