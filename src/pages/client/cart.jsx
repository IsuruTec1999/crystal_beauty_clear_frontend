import getCart from "../../utils/cart";

export default function CartPage() {
    const cart = getCart();
    return (
        <div className="w-full h-full flex justify-center p-[40px]"> 
            <div className="w-[700px] ">
                {
                    cart.map((item , index)=>{
                        return(
                            <div key ={index} className="w-full h-[100px] bg-white shadow-2xl my-[5px] ">
                                {item.name}

                            </div>
                            
                        )

                    })     
                }
            
            </div>
        
        </div>
        
    )
}   