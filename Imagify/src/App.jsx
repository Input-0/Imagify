import React from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";

const App = () => {
  return <div className="bg-black flex justify-center items-center h-screen">
    <LoginPage/>
  </div>;
};

export default App;
