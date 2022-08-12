import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register/index";
import Chat from "./pages/Chat/Index";
import Login from "./pages/Login/index";
import Avatar from "./pages/Avatar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Register />} path="/register" />
        <Route element={<Login />} path="/login" />
        <Route element={<Avatar />} path="/avatar" />
        <Route element={<Chat />} path="/chat" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
