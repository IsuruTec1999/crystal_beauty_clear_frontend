import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    return(
        <header className="w-full  h-[70px]   flex justify-start items-center bg-gray-100 relative rounded-3xl shadow-md">
            <GiHamburgerMenu className=" lg:hidden mx-4 text-3xl text-accent" onClick={() => setIsOpen(true)}/>
            <div className=" hidden lg:flex w-[500px] h-full flex justify-evenly items-center text-accent text-xl  ">
            <Link to = "/"> Home </Link>
            <Link to = "/products">Products </Link>
            <Link to = "/contact">Contact Us </Link>
            <Link to = "/reviews">Reviews </Link>
            <Link to = "/cart" className="absolute right-[30px] text-3xl"><BsCart4 /> </Link>
            </div>
            {
                isOpen && (
                    <div className="fixed z-[9999] top-0 left-0 w-full h-screen bg-[#00000060] flex">
                        <div className="w-[300px] h-full bg-white  flex flex-col justify-start items-start p-4">
                            <GiHamburgerMenu className="text-3xl text-accent " onClick={() => setIsOpen(false)} />
                            <Link to = "/" className="my-4 text-xl text-accent"> Home </Link>
                            <Link to = "/products" className="my-4 text-xl text-accent">Products </Link>
                            <Link to = "/contact" className="my-4 text-xl text-accent">Contact Us </Link>
                            <Link to = "/reviews" className="my-4 text-xl text-accent">Reviews </Link>
                            <Link to = "/cart" className="my-4 text-xl text-accent">Cart </Link>
                        </div>
                    </div>
                )
            }
        </header>
    )
}