export default function Testing() {
    let number = 0;

    function increment(){
        number = number+1;
         console.log(number);
    }

     function decrement(){
        number = number-1;
        console.log(number);
    }


    return (
        <div className="w-full h-screen  flex flex-col justify-center items-center">
            <span className="text-3xl font-bold">{number}</span>
            <div className=" w-full  flex justify-center">
                <button  onClick= {increment}className="bg-blue-600 text-white p-2 rounded-lg w-[60px] cursor-pointer"></button>
                <button onClick= {decrement} className="bg-blue-600 text-white p-2 rounded-lg w-[60px]  cursor-pointer"></button>

            </div>
        </div>
    )
}