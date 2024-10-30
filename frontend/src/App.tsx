import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import LoginForm from "./components/loginPage/Form";
import Home from "./components/home/Home";
import NotFound from "./components/404";
import CriarUsuario from "./components/user/CriarUsuario";
import CriarAgenda from "./components/agenda/CriarAgenda";

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
          <Route path="inicio" />

          <Route path="usuario">
            <Route path="criar" element={<CriarUsuario />} />
            <Route path="editar" element={<div>Editar Usuário</div>} />
            <Route path="lista" element={<div>Lista de Usuários</div>} />
          </Route>
          <Route path="agenda">
            <Route path="criar" element={<CriarAgenda />} />
            <Route path="agendar" element={<CriarAgenda />} />
          </Route>

          <Route path="*" element={<Navigate to="/erro" />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
