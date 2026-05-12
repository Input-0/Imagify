import {useState} from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import toast,{Toaster} from "react-hot-toast"
import {useForm} from "react-hook-form"
import { AuthContext } from "../context/authContext";
import {nanoid} from "nanoid"
const LoginPage = () => {
    
    let {register,handleSubmit,formState: { errors }} = useForm()
    // let {registerUser}  = AuthContext()

   
    let loginReq = (data) => {
        // console.log(data);

        
        toast.success("login successfull")
        

        
    }

    let errorHandle = (errors) =>{
        if(errors.email){
            toast.error(errors.email.message)
        }

    }
    return (
        <div className="h-[400px] w-[300px] bg-white/ rounded-sm border border-gray-400">
            <h2 className="text-white text-center text-3xl font-bold tracking-wide mt-5">Login Form</h2>

            <form onSubmit={handleSubmit(loginReq,errorHandle)} className="w-full h-full flex flex-col  items-center gap-4  mt-8 text-white ">
                <Toaster/>
                {errors.email && <h1 className="text-red-500">{errors.email.message}</h1>}
                    <Input className="p-2 h-[30px]" lname="Email:" type="email" name="email" placeholder="example@gmail.com" {...register("email",{
                        required:"email required",
                        pattern:{
                            value:/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message:"enter an valid email "

                        }
                        
                    })}   />
                    
               
                {errors.password && <p className="text-red-400">{errors.password.message}</p>}
                    <Input className="p-2 h-[30px]" lname="password" type="password" placeholder="aBc$65234" {...register("password",{
                        required:"password is required",
                        pattern:{
                            value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[&^*$#@!])[A-Za-z\d&^*$#@!]{6,20}$/,
                        message:"enter an valid password"
                        }
                        

                    })}/>
                
                <Button Btype="submit" text="login"  className={`p-2 w-[150px] font-extrabold tracking-wider bg-blue-500 hover:bg-blue-700 transition-all hover:scale-[1.2] mt-4`}/>
            </form>
        </div>
    );
};


export default LoginPage;
