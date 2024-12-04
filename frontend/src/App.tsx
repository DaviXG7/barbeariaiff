import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LoginForm from "./components/loginPage/Form";
import Home from "./components/home/Home";
import PendentesHoje from "./components/home/PentendesHoje";
import NotFound from "./components/404";
import CriarUsuario from "./components/user/CriarUsuario";
import CriarAgenda from "./components/agenda/CriarAgenda";
import Agendar from "./components/agenda/Agendar";
import EditarUsuario from "./components/user/EditarUsuario";
import Usuarios from "./components/listar/Usuarios";
import Agendas from "./components/listar/Agendas";
import Pendentes from "./components/listar/Pendentes";
import CriarServico from "./components/agenda/CriarServico";

const isAuthenticated = () => localStorage.getItem("id") !== null;

function App() {

  const [authStatus, setAuthStatus] = useState<boolean>(false);

  useEffect(() => {
    const checkAuth = () => {
      const isAuth = isAuthenticated();
      setAuthStatus(isAuth);
    };

    checkAuth();
  }, []);


  if (authStatus === null) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginForm />} />

        <Route path="erro" element={<NotFound></NotFound>}></Route>

        <Route
          path="/"
          element={
            authStatus ? (
              <Navigate to="/inicio" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/"
          element={authStatus ? <Home /> : <Navigate to="/login" />}
        >
          <Route path="inicio" element={<PendentesHoje/>}/>
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="agendas" element={<Agendas />} />
          <Route path="agendar" element={<Agendar />} />
          <Route path="criarservico" element={< CriarServico/>} />


          <Route path="usuario">
            <Route path="criar" element={<CriarUsuario />} />
            <Route path="editar/:id/:barbeiro" element={<EditarUsuario />} />
          </Route>
          <Route path="agenda">
            <Route path="criar" element={<CriarAgenda />} /> 
            <Route path="pendentes" element={<Pendentes />}/>
          </Route>

          <Route path="*" element={<Navigate to="/erro" />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
