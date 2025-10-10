import { useEffect, useState } from "react";
import getCart, { addToCart, getTotal, getTotalForLabeledPrice, removeFromCart } from "../../utils/cart";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
    const [cartLoaded, setCartLoaded] = useState(false);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        if(cartLoaded == false){
            const cart = getCart();
            setCart(cart);
            setCartLoaded(true);
        }
    },[cartLoaded])
    return (
        <div className="w-full h-full flex justify-center p-[40px]"> 
            <div className="w-full lg:w-[700px] ">
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
                                    <h2 className=" text-xl w-full text-end pr-2"> {(item.price * item.quantity).toFixed(2)}</h2>
                                </div>


                            </div>
                            
                        )

                    })     
                }
                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px]  text-xl text-end pr-2">Total</h1>
                    <h1 className="w-[100px] text-xl text-end pr-2">{getTotalForLabeledPrice().toFixed(2)}</h1>
                </div>
                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px]  text-xl text-end pr-2">Discount</h1>
                    <h1 className="w-[100px] text-xl border-b-[2px] text-end pr-2">{(getTotalForLabeledPrice() - getTotal()).toFixed(2)}</h1>
                </div>
                <div className="w-full  flex justify-end">
                    <h1 className="w-[100px]  text-xl text-end pr-2">Net Total</h1>
                    <h1 className="w-[100px] text-xl text-end pr-2 border-double border-b-[4px]">{getTotal().toFixed(2)}</h1>
                </div>
                <div className="w-full  flex justify-end"> 
                    <button className="bg-pink-400 border border-pink-400 text-white p-[12px] rounded-lg hover:bg-white hover:text-pink-500 cursor-pointer float-right mt-[20px]" onClick={() => {
                        navigate("/checkout", 
                            {
                                state: {
                                    items : cart
                                }
                            }
                        )
                         
                        }}>Proceed to Checkout</button>
                </div>
            </div>
        
        </div>
        
    )
}   