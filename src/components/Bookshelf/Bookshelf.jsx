import { Link } from "react-router-dom";

const Bookshelf = ({d}) => {
    return (
        <Link className="w-full flex flex-col items-center justify-between gap-5 mb-16 shadow-lg hover:scale-110 transition-[300ms]">
            <div className="max-h-[260px] h-full w-full border-b">
            <img src={d.img} alt="" className="w-full h-full object-scale-down" />
            </div>
            <div className="flex flex-col items-center text-center px-3 pb-4 gap-2">
                <span className="font-bold">{d.name}</span>
                {
                    d.previous_price && <span className="line-through text-lg text-[#808080]">{d.previous_price} tk</span>
                }
                <span className="font-bold text-lg text-red-500">{d.price} tk</span>
                <button className="bg-white border border-black hover:bg-black hover:text-white px-16 rounded py-2 btn">Buy it now</button>
            </div>
        </Link>
    );
};

export default Bookshelf;