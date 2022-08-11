import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register/index";
import Chat from "./components/Chat/Index";
import Login from "./components/Login/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
