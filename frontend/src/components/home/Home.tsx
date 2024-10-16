import CreateButton from "./components/Create";
import Sidebar from "./components/Sidebar";
import "./Home.css";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginForm from "../loginPage/Form";
import React from "react";

function Home() {
  return (
    <>
      <Sidebar></Sidebar>
      <CreateButton></CreateButton>
      <Routes>
        <Route path="/criarusuario" element={<LoginForm />} />

        <Route path="/criaragenda" element={<Home />} />

        <Route path="/agendar" element={<></>} />
      </Routes>
    </>
  );
}

export default Home;
