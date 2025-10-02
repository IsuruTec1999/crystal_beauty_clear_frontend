import { Route, Routes } from "react-router-dom";
import Header from "../components/header";
import ProductsPage from "./client/productsPage";
import ProductOverview from "./client/productOverview";

export default function HomePage() {
    return (
        <div className="w-full h-screen ">
            <Header/>
            <div className="w-full min-h-[calc(100vh-70px)]   ">
                <Routes Path ="/*"> 
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/products" element={<ProductsPage/>}/>
                    <Route path="/contact" element={<h1>Contact Us</h1>}/>
                    <Route path="/reviews" element={<h1>Reviews</h1>}/>
                    <Route path = "/overview/:id" element={<ProductOverview/>}/>
                    <Route path="/*" element={<h1>404 Not Found</h1>}/>
                </Routes>
                
            </div>
        </div>
    )
}