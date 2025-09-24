import toast from "react-hot-toast";
import { Link } from "react-router-dom";

export default function AddProductForm() {

    const [productId, setProductId] = useState("");
    //const [productName, setProductName] = useState("");
    //const [alternativeName, setAlternativeName] = useState("");
    //const [price, setPrice] = useState("");
    //const [labledPrice, setLabledPrice] = useState("");
    //const [description, setDescription] = useState("");
    //const [stock, setStock] = useState("");

    function handleSubmit() {
        toast.success("Product added successfully")    

    }


    return (
        <div className="w-full h-full rounded-lg  flex justify-center items-center ">
            <div className="w-[500px] h-[600px]  rounded-lg shadow-lg flex flex-col  items-center">
                            <h1 className="text-3xl font-bold m-[10px] text-gray-700">Add Product</h1>
                    <input 
                        value={productId}
                        onChange={(e) => {
                             toast.success(e.target.value)
                            }
                        }
                    className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product ID">

                    </input>
                    <input className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product Name">

                    </input>
                    <input className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Alternative Name">

                    </input>
                    <input className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Price">

                    </input>
                    <input className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Labled Price">

                    </input>
                    <textarea className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Product ID">

                    </textarea>
                    <input className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]"  placeholder="Stock">

                    </input>
                    <div className="w-[400px] h-[100px]  flex justify-between items-center rounded-lg">
                        <Link to={"/admin/products"} className="text-white text-center bg-red-500 p-[10px] w-[180px] rounded-lg  cusor-pointer hover:bg-red-600 hover:text-gray-700 ">Cancel</Link>
                        <button onClick={handleSubmit} className="text-white text-center cursor-pointer bg-green-500 p-[10px] w-[180px] rounded-lg  cusor-pointer hover:bg-green-600 hover:text-gray-700 ">Add Product</button>

                    </div>

            </div>
        </div>
    )
}