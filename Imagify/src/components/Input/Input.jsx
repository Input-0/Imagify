import React from "react";

const Input = ({type = "text",name ="",placeholder = "",className =''}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} className={`px-6 text-white py-2 border border-gray-300  rounded-sm ${className}`} />
  )
};

export default Input;
