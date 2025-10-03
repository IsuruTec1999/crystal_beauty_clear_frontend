import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loader from "../../components/loader";
import ImageSlider from "../../components/imageSlider";

export default function ProductOverview(){
    const params = useParams();
    console.log(params.id);
    if(params.id == null){

        window.location.href = "/products";
    }


    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading");

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
                        <div className="w-[50%] h-full ">
                            <h1 className="text-black  text-center  text-2xl font-bold">{product.name}</h1>

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