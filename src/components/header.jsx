import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header className="w-full  h-[70px] bg-blue-900 text-white flex justify-around items-center text-xl font-bold">
            <Link to = "/"> Home </Link>
            <Link to = "/products">Products </Link>
            <Link to = "/contact">Contact Us </Link>
            <Link to = "/reviews">Reviews </Link>
           
        </header>
    )
}