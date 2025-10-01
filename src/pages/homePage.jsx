import { Route, Routes } from "react-router-dom";
import Header from "../components/header";

export default function HomePage() {
    return (
        <div className="w-full h-screen m-h-screen  ">
            <Header/>
            <div className="w-full h-[calc(100vh-70px)] flex justify-center items-center">
                <Routes Path ="/*"> 
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/products" element={<h1>Products</h1>}/>
                    <Route path="/contact" element={<h1>Contact Us</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path="/*" element={<h1>404 Not Found</h1>}/>
                </Routes>
                
            </div>
        </div>
    )
}