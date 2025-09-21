import axios from "axios"

export default function AdminProductsPage() {

axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
    (response)=>{
    console.log(response.data)
})
    return (
        <div className="w-full h-screen  rounded-lg "> 
            <h1>Products</h1>
        </div>
    )
} 