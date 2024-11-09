import CriarUsuario from "../user/CriarUsuario";
import CreateButton from "./components/Create";
import Sidebar from "./components/Sidebar";
import "./Home.css";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <main>
      <Sidebar></Sidebar>
      <CreateButton></CreateButton>
      <Outlet />
      
    </main>
  );
}

export default Home;
