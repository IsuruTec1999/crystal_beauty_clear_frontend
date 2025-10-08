import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [modelIsDisplaying, setModelIsDisplaying] = useState(false);
    const [displayingOrder, setDisplayingOrder] = useState(null);

    useEffect(() => {
        if (!loaded) {
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/order", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            
            
            .then((response) => { 
                setOrders(response.data);
                setLoaded(true);
                console.log(response.data);
                
            });
        }
    }, [loaded]);
    /*
    {
    "_id": "68e32b60608a4425183324e7",
    "orderId": "ORD0006",
    "email": "customer@gmail.com",
    "name": "Jane Doe",
    "address": "456 Elm Street, Metropolis",
    "status": "pending",
    "phoneNumber": "9876543210",
    "billItems": [
        {
            "productId": "KP-089",
            "productName": "lipstiv",
            "Image": "https://qvypebqmubxswenpazbm.supabase.co/storage/v1/object/public/images/1759294588341085b0cd2d7c95112ee7c0a34d4236c4e.jpg",
            "quantity": 4,
            "price": 250,
            "_id": "68e32b60608a4425183324e8"
        },
        {
            "productId": "KY-testing",
            "productName": "Cream for everyone",
            "Image": "https://qvypebqmubxswenpazbm.supabase.co/storage/v1/object/public/images/1759294685266851c6db294ec32d8e82ad06abbb2e2ae.jpg",
            "quantity": 4,
            "price": 550,
            "_id": "68e32b60608a4425183324e9"
        }
    ],
    "total": 3200,
    "date": "2025-10-06T02:37:20.443Z",
    "__v": 0
}
    */
   function changeOrderStatus(orderId, status) {
    const token = localStorage.getItem("token");
    axios
      .put(
        import.meta.env.VITE_BACKEND_URL + "/api/order/" + orderId,
        { status: status },
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then(() => {
        toast.success("Order Status changed successfully");
        setLoaded(false);
        
      });
  }

    return (
        <div className="w-full h-full  ">
            {
                loaded?
                <div className="w-full h-full ">
                    <table className="w-full ">
                    <thead>
                        <tr>
                            <th className="p-2">Order Id</th>
                            <th className="p-2">Customer Email</th>
                            <th className="p-2">Customer Name</th>
                            <th className="p-2">Address</th>
                            <th className="p-2">Phone Number</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Total</th>
                            <th className="p-2">Date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(
                            (order)=>{
                                return (
                                     <tr key={order.orderId} className="border-b-2 border-gray-400 text-center cursor-pointer hover:bg-gray-200 " 
                                     
                                     >
                                    
                                    <td className="p-2">{order.orderId}</td>
                                    <td className="p-2">{order.email}</td>
                                    <td className="p-2">{order.name}</td>
                                    <td className="p-2">{order.address}</td>
                                    <td className="p-2">{order.phoneNumber}</td>
                                    <td className="p-2">
                                        <select value={order.status} className="z-50" onChange={
                                            (e)=>{
                                                changeOrderStatus(order.orderId, e.target.value)
                                            }
                                        }>
                                        <option value="pending">Pending</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="cancelled">Cancelled</option>
                                        <option value="processing">Processing</option>
                                        </select>
                                    </td>
                                    <td className="p-2">{order.total.toFixed(2)}</td>
                                    <td className="p-2">{new Date(order.date).toDateString()}</td>
                                    <td className="p-2">
                                        <button className="bg-gray-500 p-2 text-white rounded-md hover:bg-gray-600"
                                         onClick={()=>{
                                        setModelIsDisplaying(true)
                                        setDisplayingOrder(order)

                                     }}>Details
                                         </button>
                                    </td>
                                     </tr>
                                )
                            })
                    }
                    </tbody>
                    </table>
                    {
                        modelIsDisplaying && 
                        <div className="fixed  bg-[#00000070] w-full h-full top-0 left-0 flex justify-center items-center ">
                            <div className="w-[600px] h-[600px] max-h-[600px] max-w-[600px]   bg-white relative">
                                <div className="w-full h-[150px] ">
                                    <h1 className=" text-sm font-bold p-2">Order Id : {displayingOrder.orderId}</h1>
                                    <h1 className=" text-sm font-bold p-2">Order Date : {new Date(displayingOrder.date).toDateString()}</h1>
                                    <h1 className=" text-sm font-bold p-2">Order Status : {displayingOrder.status}</h1>
                                    <h1 className=" text-sm font-bold p-2">Order Total : {displayingOrder.total.toFixed(2)}</h1>
                                </div>
                                <div className="w-full h-[450px] max-h-[450px] overflow-y-scroll "> 
                                    {
                                       displayingOrder.billItems.map((item, index)=>{
                                        return(
                                            <div key={index} className="w-full h-[100px] bg-white my-[5px] flex items-center justify-between  relative shadow-2xl">
                                                <img src={item.Image} className="h-full aspect-square object-cover"/>
                                                <div className="h-full max-w-[300px] w-[300px] overflow-hidden"> 
                                                    <h1 className=" text-xl font-bold ">{item.productName}</h1>
                                                    <h2 className="text-gray-500 text-lg ">LKR: {item.price.toFixed(2)}</h2>
                                                    <h2 className="text-gray-500 text-lg ">Quantity: {item.quantity} </h2>
                                                </div>
                                            </div>
                                        )
                                       })
                                    } 

                                </div>
                                <button className="w-[40px] h-[40px] absolute top-[-20px] right-[-20px] rounded-full  bg-white  shadow shadow-black   flex justify-center items-center  "
                                onClick={()=>{setModelIsDisplaying(false)}}>
                                    <IoCloseSharp />
                                </button>

                            </div>

                        </div>
                    }


                </div>
                :
                <Loader/>
            }
           
        </div>
    );
}