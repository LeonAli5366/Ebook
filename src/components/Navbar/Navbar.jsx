import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex flex-row items-center border-b py-5 px-10 justify-between text-[#4086C6]">
            <img src="https://stefanobemer.com/cdn/shop/files/logo-bemer_120x@2x.png?v=1658141691" alt="" className="w-20"/>
            <Link>Home</Link>
            <Link>Account</Link>
        </div>
    );
};

export default Navbar;