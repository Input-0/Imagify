import React, { useState } from "react";
import uploadImg from "../assets/img.png"
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";


const Upload = () => {

    let [img,setImage] = useState("")
    console.log(img);
    

    
    

  return (
    <div className="">
        <div className="h-40 relative w-60 border rounded-md p-8 flex justify-center items-center outline-1 outline-amber-50">
            
            <Input type="file" className=" sr-only h-full w-full absolute z-20 " data = "w-full h-full " onchange={setImage} /> 
            <img src={uploadImg} alt="" className="absolute z-10 pointer-events-none " /> 
        </div>
        <Button text="Upload" className="h-1/2 w-1/3 mt-10 px-10 py-5 ml-14 text-white w-36"/>

    </div>
  )
};

export default Upload;
