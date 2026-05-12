import React from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { BrowserRouter,Route,Routes } from "react-router-dom";

const App = () => {
  return <div className="bg-black flex justify-center items-center h-screen">
   
  <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<LoginPage/>}/>
  </Routes>
  </div>;


};

export default App;
