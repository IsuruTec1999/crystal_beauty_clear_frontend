export default function LoginPage() {
    return (
        <div className="w-full bg-red-900 h-screen bg-[url(/login_bg.jpg)] bg-cover bg-center flex ">
            <div className=" w-[50%] h-full">

            </div>
            <div className=" w-[50%] h-full flex justify-center items-center" >
                <div className="w-[450px] h-[600px]  backdrop-blur-xl shadow-xl rounded-xl flex flex-col justify-center items-center">
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="Email" placeholder="Email"></input>
                    <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[10px]" type="Password" placeholder="Password"></input>
                    <button className="w-[400px] h-[50px] bg-green-500 text-white  rounded-xl text-center m-[10px] cursor-pointer">Login</button>
                </div>
            </div>
        </div>
    );
}