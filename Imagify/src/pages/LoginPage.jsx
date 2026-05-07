import {useState} from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import toast,{Toaster} from "react-hot-toast"
import {useForm} from "react-hook-form"

const LoginPage = () => {
    
    let {register,handleSubmit,formState: { errors }} = useForm()
    let loginReq = (data) => {
        console.log(data);
        console.log(errors.email);
        
        

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
                <label htmlFor="" className="flex flex-col">
                    Email:
                    <Input className="p-2 h-[30px]"  {...register("email",{
                        required:"must fill the email field"
                        
                    })}  />
                    {/* {errors.email && <h1>please enter an valid email</h1>} */}
                </label>
                <label htmlFor="" className="flex flex-col">
                    Password:
                    <Input className="p-2 h-[30px]" {...register("password",{
                        required:"must fill the pasword field"

                    })}/>
                </label>
                <Button Btype="submit" text="login"  className={`p-2 w-[150px] font-extrabold tracking-wider bg-blue-500 hover:bg-blue-700 transition-all hover:scale-[1.2] mt-4`}/>
            </form>
        </div>
    );
};

export default LoginPage;
