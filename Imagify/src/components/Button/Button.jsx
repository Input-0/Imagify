import React from "react";
import "./Button.css"

const Button = ({Btype,text,className,onClick}) => {
  return(
    <button className={` one  px-10 border  border-white rounded-sm ${className}`} onClick={onClick}  type={Btype || "button"}>{text}</button>
  )
};

export default Button;
