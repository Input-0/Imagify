import React, { useEffect, useState,useRef } from "react";
import uploadImg from "../assets/img.png"
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";
import { AuthContext } from "../context/authContext";
import localforage from "localforage";


const Upload = () => {


    let [img,setImage] = useState("")
    let [preview,setView] = useState("")
    let [photos,setPhotos] = useState([])
    
    useEffect(() =>{
      let getImage = async()=> {
        let imgs = await localforage.getItem("photos")
        setPhotos(imgs || [])
      }
      getImage()
      
    },[])
    
    console.log(photos);

    let {currentUser} = AuthContext()
    // console.log("got the user:::::",currentUser[0]?.id);
    
    let inputRef = useRef()
    // console.log(img);

    useEffect(() =>{
      if(!(typeof img == "string")){
        // console.log("here we are ");
        
        let url = URL.createObjectURL(img)
        setView(url)
      }
    },[img])
    // console.log("here is the preview:::",preview);
    
     const handleUpload = async() =>{
      if(img){
        
        

        let photo = {
          id:currentUser[0].id,
          username:currentUser[0].username,
          image:img
        }

        let imgStore = [...photos,photo]

        setPhotos(imgStore)

        await localforage.setItem("photos",imgStore)
        setView("")
        setImage("")
        inputRef.current.value = ""
      }
    }


    

    
    

  return (
    <div className="">
        <div className="h-40 relative w-60 border rounded-md p-8 flex justify-center items-center outline-1 outline-amber-50">
            
            <Input type="file" className=" sr-only h-full w-full absolute z-20 " data = "w-full h-full " ref={inputRef} change={setImage} /> 
            <img src={preview || uploadImg} alt="" className="absolute z-10 pointer-events-none w-full h-full " /> 
        </div>
        <Button text="Upload" className="h-1/2 w-1/3 mt-10 px-10 py-5 ml-14 text-white w-36" onClick ={handleUpload}/>

    </div>
  )
};

export default Upload;
