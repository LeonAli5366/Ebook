/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContex } from "../../contextApi/UserContex";

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
    </div>
  );
};

export default Navbar;
