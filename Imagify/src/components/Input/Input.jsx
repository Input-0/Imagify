import React from "react";

const Input =  ({type = "text",name ="",placeholder = "",className ='',lname="data",...rest }) => {
  // console.log({...rest});
  
  return (
    <label className="flex flex-col"> {lname}
    <input type={type} name={name} placeholder={placeholder}   className={`px-6 text-white py-2 border border-gray-300  rounded-sm ${className}` } {...rest}/>
    </label>
  )
};

export default Input;
