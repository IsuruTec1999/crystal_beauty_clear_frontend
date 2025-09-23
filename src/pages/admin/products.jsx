import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

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
        <div className="w-full h-screen  rounded-lg  relative"> 
        <button className="text-white bg-gray-700 p-[12px] absolute bottom-5 right-5 rounded-full text-3xl cusor-pointer hover:bg-gray-300 hover:text-gray-700 ">
            <FaPlus />
        </button>
        <table className="w-full">
            <thead>
                <tr>
                    <th className="p-2">Product Id</th>
                    <th className="p-2">Name</th>
                    <th className="p-2">Price</th>
                    <th className="p-2">Labeled Price</th>
                    <th className="p-2">Stock</th>
                </tr>

            </thead>
            <tbody>
                 {
                 products.map(
                   (product,index)=>{
                    console.log("mapping"+product.productId)
                    return (
                        <tr key={index} className="border-b-2 border-gray-400 text-center cursor-pointer hover:bg-gray-700 hover:text-white" >
                            <td className="p-2">{product.productId}</td>
                            <td className="p-2">{product.name}</td>
                            <td className="p-2">{product.price}</td>
                            <td className="p-2">{product.labeledPrice}</td>
                            <td className="p-2">{product.stock}</td>
                        </tr>
                    )

                    
                   }      

                 )
            }

            </tbody>


        </table>


           
        </div>
    )
} 