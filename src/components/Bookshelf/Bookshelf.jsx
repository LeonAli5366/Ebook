/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Bookshelf = ({d}) => {
    const price = (parseInt(d.price)).toFixed(2);
    const discountedPrice = (d.price-(parseInt((d.price * d.discount)/100))).toFixed(2);
    return (
        <Link to={`/addtocart/${d._id}`} className="w-full flex flex-col items-center justify-between gap-5 mb-16 shadow-lg hover:scale-110 transition-[300ms]">
            <div className="max-h-[260px] h-full w-full border-b">
            <img src={`http://localhost:5000/api/v1/product/product/photo?id=${d._id}`} alt="" className="w-full h-full object-scale-down" />
            </div>
            <div className="flex flex-col items-center text-center px-3 pb-4 gap-2">
                <span className="font-bold">{d.name}</span>
                {
                    d?.price && <span className="line-through text-lg text-[#808080]">{price} $</span>
                }
                <span className="font-bold text-lg text-red-500">{discountedPrice} $</span>
                <button className="bg-white text-black border border-black hover:bg-black hover:text-white px-16 rounded py-2 btn">Buy it now</button>
            </div>
        </Link>
    );
};

export default Bookshelf;