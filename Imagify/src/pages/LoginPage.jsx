import React from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const LoginPage = () => {
    return (
        <div className="h-[400px] w-[300px] bg-white/ rounded-sm border border-gray-400">
            <h2 className="text-white text-center text-3xl font-bold tracking-wide mt-5">Login Form</h2>

            <div className="w-full h-full flex flex-col  items-center gap-4  mt-8 text-white ">
                <label htmlFor="" className="flex flex-col">
                    Email:
                    <Input className="p-2 h-[30px]" />
                </label>
                <label htmlFor="" className="flex flex-col">
                    Password:
                    <Input className="p-2 h-[30px]" />
                </label>
                <Button text="login" className={`p-2 w-[150px] font-extrabold tracking-wider bg-blue-500 hover:bg-blue-700 transition-all hover:scale-[1.2] mt-4`}/>
            </div>
        </div>
    );
};

export default LoginPage;
