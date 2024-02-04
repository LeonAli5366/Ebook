import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-row items-start justify-between max-w-[1200px] w-full mx-auto my-10 border-t pt-5">
            <div className="flex flex-col items-start gap-1">
                <span className="mb-2 text-lg font-bold border-b border-black">About the store</span>
                <Link className="text-black hover:text-blue-500">About us</Link>
                <Link className="text-black hover:text-blue-500">How To Pay</Link>
                <Link className="text-black hover:text-blue-500">Shipping & Delivery</Link>
                <Link className="text-black hover:text-blue-500">DMCA</Link>
            </div>
            <div className="flex flex-col items-start gap-1">
                <span className="mb-2 text-lg font-bold border-b border-black">Terms and Conditions</span>
                <Link className="text-black hover:text-blue-500">Terms & Conditions</Link>
                <Link className="text-black hover:text-blue-500">Return Policy</Link>
                <Link className="text-black hover:text-blue-500">Privacy Policy</Link>
            </div>
            <div className="flex flex-col items-start gap-1">
                <span className="mb-2 text-lg font-bold border-b border-black">Contact Us</span>
                <Link className="text-black hover:text-blue-500">Contact us</Link>
                <Link className="text-black hover:text-blue-500">FAQ</Link>
            </div>
        </div>
    );
};

export default Footer;