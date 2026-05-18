import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import localforage from "localforage";

const Home = () => {
  let [photos,setPhotos] = useState([])
  

  useEffect(() =>{

    let getImage = async() =>{
      let imgs = await localforage.getItem("photos")
      setPhotos(imgs || [])
    }
    getImage()

  },[])
  return (
    <div className="w-full mt-20"  >
        <Header/>

        <div className="flex flex-col justify-center items-center">
          {
            photos.length ? <>
            {
              photos.map((val,ind) => {
                let url = URL.createObjectURL(val.image)

                return (
                <div id={ind} className="border border-amber-50 rounded-md w-70 h-80">
                  <h2><span className="h-6 w-6 bg-blue-600 inline-block rounded-full text-white">{val.username.charAt(0)}</span> {val.username}</h2>
                  <div className="">
                    <img className="h-60 w-70 rounded-3xl" src={url} alt="" />
                  </div>

                </div>
              )
              })
            }
            </> : <h2> No posts yet ..........</h2>
          }
        </div>

    </div>
  );
};

export default Home;
