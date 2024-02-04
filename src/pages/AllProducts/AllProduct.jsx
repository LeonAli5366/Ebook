import { useContext } from "react";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { AllProducts } from "../../contextApi/ProductContext";

const AllProduct = () => {
  const {products} = useContext(AllProducts)
    return (
        <div className="w-full flex flex-col items-center pt-10">
        <span className="text-3xl font-bold">Our Bookshelf</span>
        <span>Find everything you want</span>
        <div className="grid grid-cols-4 gap-4 w-full max-w-[1200px] pt-10">
          {products.map((d) => (
            <Bookshelf key={d._id} d={d} />
          ))}
        </div>
      </div>
    );
};

export default AllProduct;