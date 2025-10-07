import axios from "axios";
import { useEffect, useState } from "react";

export default function AdminOrdersPage() {
    const [orders, setOrders] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const token = localStorage.getItem("token");
            axios.get(import.meta.env.VITE_BACKEND_URL + "/api/order", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
            
            
            .then((response) => {
                console.log(response.data);
                
            });
        }
    }, [loaded]);
    return (
        <div className="w-full h-full bg-red-100 ">
            <h1 className="text-2xl font-bold mb-4">Admin Orders Page</h1>
            <p>Here you can manage all the orders placed by customers.</p>
            {/* Add more admin order management features here */}
        </div>
    );
}