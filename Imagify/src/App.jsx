import React from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
const App = () => {
  return <div className="bg-gray-500 flex  h-screen flex justify-center items-center">
   
  <Routes>
    <Route path="/" element={<Register/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/home" element={<Upload/>}/>
  </Routes>
  </div>;


};

export default App;
