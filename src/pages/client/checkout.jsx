import {  useState } from "react";
import { TbTrash } from "react-icons/tb";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckoutPage() {
    const location = useLocation();
    const [cart, setCart] = useState(location.state.items);
    const [cartRefresh, setCartRefresh] = useState(false);
    const navigate = useNavigate();

    function getTotal() {
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
    }

    function getTotalForLabeledPrice() {
        let total = 0;
        cart.forEach((item) => {
            total += item.labeledPrice * item.quantity;
        });
        return total;
    }
    
    return (
        <div className="w-full h-full flex justify-center p-[40px]"> 
            <div className="w-[700px] ">
                {
                    cart.map((item , index)=>{
                        return(
                            <div key ={index} className="w-full h-[100px] bg-white shadow-2xl my-[5px] flex items-center justify-between  p-[20px] relative">
                                <button className="absolute right-[-50px] bg-red-500 w-[40px] h-[40px] rounded-full   text-white cursor-pointer flex justify-center items-center shadow"
                                    onClick={()=>{
                                        const newCart = cart.filter((product)=> product.productId !== item.productId);
                                        setCart(newCart)
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
                                        const newCart = cart
                                        newCart[ index ].quantity -= 1
                                        if (newCart[ index ].quantity <= 0) newCart[ index ].quantity = 1
                                        setCart(newCart)
                                        setCartRefresh(!cartRefresh)
                                        
                                        }}>-</button>
                                    <h2 className="font-bold text-xl ">{item.quantity}</h2>
                                    <button className="text-2xl w-[30px] h-[30px] bg-black text-white cursor-pointer rounded-full flex justify-center items-center mx-[5px] "
                                    onClick={() => {
                                        const newCart = cart
                                        newCart[ index ].quantity += 1
                                        setCart(newCart)
                                        setCartRefresh(!cartRefresh)
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
                         
                        }}>Place Order</button>
                </div>
            </div>
        
        </div>
        
    )
}   