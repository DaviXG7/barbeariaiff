import React from "react";
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

const isAuthenticated = () => {
  return true; // Simule um usuário autenticado com true
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login" element={<LoginForm />} />

        <Route path="erro" element={<NotFound></NotFound>}></Route>

        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate to="/inicio" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/"
          element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
        >
          <Route path="inicio" element={<PendentesHoje/>}/>
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="agendas" element={<Agendas />} />
          <Route path="agendar" element={<Agendar />} />


          <Route path="usuario">
            <Route path="criar" element={<CriarUsuario />} />
            <Route path="editar" element={<EditarUsuario />} />
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
