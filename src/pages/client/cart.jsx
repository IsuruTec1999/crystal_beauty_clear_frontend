import { useEffect, useState } from "react";
import getCart, { addToCart, getTotal, removeFromCart } from "../../utils/cart";
import { TbTrash } from "react-icons/tb";

export default function CartPage() {
    const [cartLoaded, setCartLoaded] = useState(false);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        if(cartLoaded == false){
            const cart = getCart();
            setCart(cart);
            setCartLoaded(true);
        }
    },[cartLoaded])
    return (
        <div className="w-full h-full flex justify-center p-[40px]"> 
            <div className="w-[700px] ">
                {
                    cart.map((item , index)=>{
                        return(
                            <div key ={index} className="w-full h-[100px] bg-white shadow-2xl my-[5px] flex items-center justify-between  p-[20px] relative">
                                <button className="absolute right-[-50px] bg-red-500 w-[40px] h-[40px] rounded-full   text-white cursor-pointer flex justify-center items-center shadow"
                                    onClick={()=>{
                                        removeFromCart(item.productId);
                                        setCartLoaded(false);
                                    }}>
                                    <TbTrash />
                                </button>
                                <img src={item.image} className="h-full aspect-square object-cover"/>
                                <div className="h-full max-w-[300px] w-[300px] overflow-hidden"> 
                                    <h1 className=" text-xl font-bold ">{item.name}</h1>
                                    <h2 className="text-gray-500 text-lg ">{item.altName.join(" | ")}</h2>
                                    <h2 className="text-gray-500 text-lg ">LKR : {item.price.toFixed(2)}</h2>
                                    
                                    
                                </div>
                                <div className="h-full  w-[100px] justify-center items-center flex ">
                                    <button className="text-2xl w-[30px] h-[30px] bg-black text-white cursor-pointer rounded-full flex justify-center items-center mx-[5px] "
                                    onClick={() => {
                                        addToCart(item,-1)
                                        setCartLoaded(false);
                                        }}>-</button>
                                    <h2 className="font-bold text-xl ">{item.quantity}</h2>
                                    <button className="text-2xl w-[30px] h-[30px] bg-black text-white cursor-pointer rounded-full flex justify-center items-center mx-[5px] "
                                    onClick={() => {
                                        addToCart(item,1)
                                        setCartLoaded(false);
                                        }}>+</button>

                                </div>
                                
                                <div className="h-full  w-[100px] justify-center  items-center">
                                    <h2 className=" text-xl "> {(item.price * item.quantity).toFixed(2)}</h2>
                                </div>


                            </div>
                            
                        )

                    })     
                }
                <div className="w-full h-[100px] bg-red-500">
                    <h1>{getTotal()}</h1>

                </div>
            </div>
        
        </div>
        
    )
}   