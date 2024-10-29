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

const isAuthenticated = () => {
  return true; // Simule um usuário autenticado com true
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota de Login como página inicial */}
        <Route path="login" element={<LoginForm />} />

        <Route path="erro" element={<NotFound></NotFound>}></Route>

        {/* Rota raiz que redireciona para /inicio se autenticado */}
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

        {/* Agrupando rotas com Home como contêiner */}
        <Route
          path="/"
          element={isAuthenticated() ? <Home /> : <Navigate to="/login" />}
        >
          {/* Rota para Página Inicial */}
          <Route path="inicio" />

          {/* Rotas para usuário */}
          <Route path="usuario">
            <Route path="criar" element={<CriarUsuario />} />
            <Route path="editar" element={<div>Editar Usuário</div>} />
            <Route path="lista" element={<div>Lista de Usuários</div>} />
          </Route>

          {/* Rota para Erro 404 quando autenticado */}
          <Route path="*" element={<Navigate to="/erro" />} />
        </Route>

        {/* Redirecionamento para login se qualquer outra rota é acessada sem estar logado */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
