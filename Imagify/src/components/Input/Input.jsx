import React, { useState } from "react";

const Input =  ({type = "text",name ="",placeholder = "",className ='',lname="" ,data="" ,ref="",...rest }) => {
  // console.log(rest.onchange);
  
  let handleImg = (e) =>{

    rest.change(e.target.files[0])

    

  }
  
  
  return (
    <label className={`flex flex-col ${data}  ` } > {lname}
    <input type={type} name={name} placeholder={placeholder} ref={ref}   className={`px-6 text-white py-2 border border-gray-300  rounded-sm ${className}`  } onChange={handleImg} {...rest} />
    </label>
  )
};

export default Input;
