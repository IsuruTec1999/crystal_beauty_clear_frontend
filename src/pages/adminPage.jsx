import { Routes } from "react-router-dom";

export default function AdminPage() {
    return (
        <div className="w-full h-screen bg-gray-200 flex p-2 "> 
           <div className="w-[300px] h-full ">
            <a href="/admin" className="block w-full h-[50px] bg-blue-500 text-white rounded-xl text-center p-2 m-2"> Dashbourd</a>
             <a href="/admin/users" className="block w-full h-[50px] bg-blue-500 text-white rounded-xl text-center p-2 m-2"> Users</a>
              <a href="/admin/products" className="block w-full h-[50px] bg-blue-500 text-white rounded-xl text-center p-2 m-2"> Products</a>



           </div>
           <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                <Routes path="/*">
                    
                
                
                
                
                </Routes>
           </div>
            
        </div>
    )
}