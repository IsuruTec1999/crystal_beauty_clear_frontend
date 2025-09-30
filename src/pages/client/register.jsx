import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); // Added confirmPassword state
    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleRegister() {
        // Check if password and confirmPassword match
        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        setLoading(true);

        axios.post(import.meta.env.VITE_BACKEND_URL + "/api/user/", {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            phone: phone
        }).then((response) => {
            console.log("Registration successful", response.data);
            toast.success("Registration successful");
            navigate("/login");
            setLoading(false);
        }).catch((error) => {
            console.log("Registration failed", error.response.data);
            toast.error(error.response.data.message || "Registration failed");
            setLoading(false);
        });
    }

    return (
        <div className="w-full bg-red-900 h-screen bg-[url(/login_bg.jpg)] bg-cover bg-center flex ">
            <div className="w-[50%] h-full">
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <div className="w-[450px] h-[750px] backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <input
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="text"
                        placeholder="First Name"
                    />
                    <input
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="text"
                        placeholder="Last Name"
                    />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        onChange={(e) => setConfirmPassword(e.target.value)} // Added Confirm Password input
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="password"
                        placeholder="Confirm Password"
                    />
                    <input
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]"
                        type="text"
                        placeholder="Phone Number"
                    />
                    <button
                        onClick={handleRegister}
                        className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl text-center m-[10px] cursor-pointer"
                    >
                        {loading ? "Loading..." : "Register"}
                    </button>
                    <p className="text-gray-600 text-center m-[10px]">
                        Already have an account? 
                        &nbsp;
                        <span className="text-green-600 cursor-pointer hover:text-green-800">
                            <Link to="/login">Login now</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
