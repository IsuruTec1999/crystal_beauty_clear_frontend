import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../../components/loader";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [modelIsDisplaying, setModelIsDisplaying] = useState(false);

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
                        </tr>
                    </thead>
                    <tbody>
                    {
                        orders.map(
                            (order)=>{
                                return (
                                     <tr key={order.orderId} className="border-b-2 border-gray-400 text-center cursor-pointer hover:bg-gray-200 " 
                                     onClick={()=>{setModelIsDisplaying(true)}}
                                     >
                                    
                                    <td className="p-2">{order.orderId}</td>
                                    <td className="p-2">{order.email}</td>
                                    <td className="p-2">{order.name}</td>
                                    <td className="p-2">{order.address}</td>
                                    <td className="p-2">{order.phoneNumber}</td>
                                    <td className="p-2">{order.status}</td>
                                    <td className="p-2">{order.total.toFixed(2)}</td>
                                    <td className="p-2">{new Date(order.date).toDateString()}</td>
                                     </tr>
                                )
                            })
                    }
                    </tbody>
                    </table>
                    {
                        modelIsDisplaying && 
                        <div className="fixed  bg-[#00000070] w-full h-full top-0 left-0  ">
                            <div className="w-[600px] h-[600px] bg-white rounded-lg shadow-lg absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-5 ">

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