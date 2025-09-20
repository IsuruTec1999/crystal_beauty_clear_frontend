import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleLogin(){
        console.log("Email :",email);
        console.log("Password :",password);

        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/user/login",{
            email:email,
            password:password
        }).then((response)=>{
            console.log("Login successful",response.data);
            toast.success("Login successful")

        }).catch((error)=>{
            console.log("login faild",error.response.data);
            toast.error(error.response.data.message || "Login failed")
        })





        console.log("Login button clicked")
    }
    return (
        <div className="w-full bg-red-900 h-screen bg-[url(/login_bg.jpg)] bg-cover bg-center flex ">
            <div className=" w-[50%] h-full">

            </div>
            <div className=" w-[50%] h-full flex justify-center items-center" >
                <div className="w-[450px] h-[600px]  backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <input onChange={
                        (e) => {
                            setEmail(e.target.value)

                       

                        }} className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="Email" placeholder="Email"></input>
                    <input onChange={(e)=>{
                        setPassword(e.target.value)
                    }
                    } className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="Password" placeholder="Password"></input>
                    <button onClick={handleLogin} className="w-[400px] h-[50px] bg-green-500 text-white  rounded-xl text-center m-[10px] cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    );

}