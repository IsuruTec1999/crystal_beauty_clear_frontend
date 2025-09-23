import axios from "axios"
import { useEffect, useState } from "react";

export default function AdminProductsPage() {

    const [products, setProducts] = useState([]);

    useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
            (response)=>{
                console.log(response.data)
                setProducts(response.data)
        })
        },
        []
    )


    return (
        <div className="w-full h-screen  rounded-lg "> 
        <table>
            <thead>


            </thead>
            <tbody></tbody>


        </table>


            {
                 products.map(
                   (product)=>{
                    console.log("mapping"+product.productId)
                    return (
                        <div className="w-full h-[100px] bg-gray-300 flex items-center justify-between  p-2 " >
                            
                        </div>
                    )

                    
                   }      

                 )
            }
        </div>
    )
} 