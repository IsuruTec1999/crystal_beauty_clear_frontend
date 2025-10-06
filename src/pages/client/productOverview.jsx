import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";
import { addToCart } from "../../utils/cart";

export default function ProductOverview(){
    const params = useParams();
    console.log(params.id);
    if(params.id == null){

        window.location.href = "/products";
    }


    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");
    const navigate = useNavigate();

    useEffect(()=>{
        console.log(import.meta.env.VITE_BACKEND_URL+"/api/product/"+params.id);
        if(status == "loading" ){
            axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product/"+params.id).then(
                (res)=>{
                    console.log(res)
                    setProduct(res.data.product);
                    setStatus("loaded");
                }
            ).catch(
                (err)=>{
                    toast.error("Product Is Not Available");
                    setStatus("error");
                }
            )
        }

    },[status]
)

    return(
        <div className="w-full h-full">
            {
                status == "loading" && <Loader/>
            }
            {
                status == "loaded" && 
                    <div className="w-full h-full flex ">
                        <div className="w-[50%] h-full ">
                            <ImageSlider images={product.images}/>  


                        </div>
                        <div className="w-[50%] h-full  p-[40px]">
                            <h1 className="text-black  text-center  text-3xl font-bold mb-[40px]">{product.name}{" | "}<span className="text-gray-500   text-3xl mr-[20px]"> {product.altName.join(" | ")}</span></h1>
                            <h2 className="text-gray-500  text-center  text-2xl font-semibold">
                               
                            </h2>
                            <div className="w-full flex justify-center mb-[40px]">
                                {
                                    product.labeledPrice > product.price?
                                    <>
                                    <h2 className="text-2xl mx-[20px]">LKR : {product.price.toFixed(2)}</h2>
                                    <h2 className="text-2xl line-through text-gray-500">
                                        LKR : {product.labeledPrice.toFixed(2)}</h2>
                                    
                                    </>
                                    :
                                      <h2 className="text-2xl mx-[20px]">LKR : {product.price}</h2>
                                    
                                }
                            </div>
                            
                            <p className="text-gray-500  text-center  text-xl mb-[40px]">{product.description}</p>
                                <div className="w-full flex justify-center mb-[40px]">
                                    <button className="bg-pink-700 border border-pink-700 text-white p-[12px] rounded-lg hover:bg-white hover:text-pink-500 cursor-pointer  "
                                    onClick={()=>{
                                        addToCart(product, 1);
                                        toast.success("Product Added To Cart");
                                        
                                    }}>
                                            Add To Cart</button>

                                    <button 
                               
                                    onClick={()=>{
                                        navigate("/checkout", 
                                            {
                                                state: {
                                                    items : [
                                                         {
                                                             productId : product.productId,
                                                             name : product.name,
                                                             altName : product.altName,
                                                             price : product.price,
                                                             labeledPrice : product.labeledPrice,
                                                             image : product.images[0],
                                                             quantity : 1
                                                         }
                                                    ]
                                                }
                                            }
                                        )
                                    }}
                                    className="bg-pink-700 border border-pink-700 text-white p-[12px] rounded-lg hover:bg-white hover:text-pink-500 cursor-pointer  ml-[30px]">
                                        Buy Now
                                        </button>
                                    
                                     </div>
                        </div>
                    </div>
            }
            {
                status== "error" && <div>
                    Error
                    </div>
            }
        </div>
    )
}