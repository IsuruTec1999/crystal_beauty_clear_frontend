
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mediaUpload from "../../utils/mediaUpload";

export default function EditProductForm() {

 
const locationData = useLocation();
const navigate = useNavigate();
if (locationData.state == null) {
    toast.error("Please select a product to edit")
    window.location.href = "/admin/products"
}
const [productId, setProductId] = useState(locationData.state.productId);   
const [name, setName] = useState(locationData.state.name);
const [altName, setAltNames] = useState(locationData.state.altName.join(","));
const [price, setPrice] = useState(locationData.state.price);
const [labledPrice, setLabledPrice] = useState(locationData.state.labeledPrice);
const [description, setDescription] = useState(locationData.state.description);
const [stock, setStock] = useState(locationData.state.stock);
const [images, setImages] = useState([]);




    async function handleSubmit() {
        const promisesArray = [];
        for (let i=0; i<images.length; i++){
            const promise = mediaUpload(images[i])
            promisesArray[i] = promise
        }
        try{
        const result = await Promise.all(promisesArray)
        

        const altNamesArray = altName.split(",")
        const product = {
            productId : productId,
            name : name,
            altName : altNamesArray,
            price : price,
            labeledPrice : labledPrice,
            description : description,
            stock : stock,
            images : result
        }
        const token = localStorage.getItem("token")
        console.log(token)

       await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product", product,{
            headers : {
                "Authorization" : "Bearer "+token
            }
        })
        toast.success("Product added successfully")
        navigate("/admin/products")

     }catch (error){  
        console.log(error)
        toast.error("Failed to add product")
     }    
 

    }


    return (
        <div className="w-full h-full rounded-lg  flex justify-center items-center ">
            <div className="w-[500px] h-[600px]  rounded-lg shadow-lg flex flex-col  items-center">
                            <h1 className="text-3xl font-bold m-[10px] text-gray-700">Edit Product</h1>
                    <input 
                        disabled
                         value={productId}
                        onChange={(e) => {
                            setProductId(e.target.value);
                            }
                        }

                       
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product ID">

                    </input>
                    <input
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product Name">

                    </input>
                    <input 
                        value={altName}
                        onChange={(e) => {
                            setAltNames(e.target.value);
                        }}
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Alternative Name">

                    </input>
                    <input 
                        value={price}
                        onChange={(e) => {
                            setPrice(e.target.value);
                        }}
                        type="number"
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Price">

                    </input>
                    <input 

                        value={labledPrice}
                        onChange={(e) => {
                            setLabledPrice(e.target.value);
                        }}
                        type="number"
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Labled Price">

                    </input>
                    <textarea
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product Description">

                    </textarea>
                    <input
                        type="file"
                        onChange={(e)=>{
                            setImages(e.target.files)
                        }
                    }
                    multiple
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder=" Product Images"></input>

                    <input
                        value={stock}
                        onChange={(e) => {
                            setStock(e.target.value);
                        }}
                        type="number"
                    
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Stock">

                    </input>
                    <div className="w-[400px] h-[100px]  flex justify-between items-center rounded-lg">
                        <Link to={"/admin/products"} className="text-white text-center bg-red-500 p-[10px] w-[180px] rounded-lg  cusor-pointer hover:bg-red-600 hover:text-gray-700 ">Cancel</Link>
                        <button onClick={handleSubmit} className="text-white text-center cursor-pointer bg-green-500 p-[10px] w-[180px] rounded-lg  cusor-pointer hover:bg-green-600 hover:text-gray-700 ">Edit Product</button>

                    </div>

            </div>
        </div>
    )
}