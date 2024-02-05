/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../contextApi/UserContex";
// import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const { user } = useContext(AuthContex);
  
  return (
    <div className="flex flex-row items-center border-b px-10 justify-center gap-5 text-[#4086C6] sticky top-0 left-0 bg-white py-5 z-10">
      {/* <Link to='/'><img
        src="https://stefanobemer.com/cdn/shop/files/logo-bemer_120x@2x.png?v=1658141691"
        alt=""
        className="w-24"
      /></Link> */}
      <Link to='/'>Home</Link>
            <Link to='/allproducts'>All Products</Link>
            <Link to='/contactus'>Contact Us</Link>
      <Link to={`${user?.email ? "/profile" : "/login"}`}>Account</Link>
      {/* <label htmlFor="my-drawer-4" className="cursor-pointer"><IoCartOutline size={25} color="#4086C6"/></label> */}
    </div>
  );
};

export default Navbar;
