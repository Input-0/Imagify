import React from "react";
import "./Button.css"

const Button = ({Btype,text,className}) => {
  return(
    <button className={` one  px-10 border  border-white rounded-sm ${className}`}  type={Btype || "button"}>{text}</button>
  )
};

export default Button;
