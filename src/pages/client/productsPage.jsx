import axios from "axios";
import { useEffect, useState } from "react"
import Loader from "../../components/loader";
import ProductCard from "../../components/product_card";

export default function ProductsPage() {
    const [productList, setProductList] = useState([]);
    const [productsLoaded, setProductsLoaded] = useState(false);
    useEffect(
        ()=>{
            if(!productsLoaded){
                 axios.get(import.meta.env.VITE_BACKEND_URL + "/api/product").then(
                    (res)=>{
                        setProductList(res.data);
                        setProductsLoaded(true);
                    }

                 )

            }
                
            },[productsLoaded]
        )
    return (
        
        <div className="w-full h-full   ">  
        
         {/* Get in Touch Banner Section */}
            <div className="relative bg-gradient-to-r from-pink-500 to-teal-400 py-16 px-4 rounded-3xl mt-4 ">
                <div className="max-w-7xl mx-auto text-center text-white relative z-10">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200 mb-4">
                        Our Products
                    </h1>
                    <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                        Explore our premium products loved by customers for their quality and effectiveness.
                    </p>
                </div>
                
            </div>
           { /* Get in Touch Banner Section */}
           
        
           {
            productsLoaded ?
            <div className="w-full h-full flex flex-wrap justify-center  ">
                {
                    productList.map(
                        (product)=>{
                            return(
                                <ProductCard key={product.productId} product = {product}/>
                            )
                            
                        }
                    )
                }
                

            </div>
            :
            <Loader/>
           }
           <br/>
           <br/>
            <br/>
            <div className="bg-rose-300 text-black py-4 mt-12 rounded-lg">
       <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} ID Products. All rights reserved.
          </p>
        </div>
      </div>
        </div> 
        
    )
}

