import React, { useState } from "react";

const Input =  ({type = "text",name ="",placeholder = "",className ='',lname="" ,data="",...rest }) => {
  // console.log(rest.onchange);
  
  let handleImg = (e) =>{
   
    let one = new FileReader()
    
    // console.log(realImg);
    

    one.readAsText(e.target.files[0])

    one.onload = (e) =>{
      // console.log(e.target.result);
      rest.onchange(e.target.result)

      
    }
    

  }
  
  
  return (
    <label className={`flex flex-col ${data}  ` } > {lname}
    <input type={type} name={name} placeholder={placeholder}   className={`px-6 text-white py-2 border border-gray-300  rounded-sm ${className}`  } onChange={handleImg} />
    </label>
  )
};

export default Input;
