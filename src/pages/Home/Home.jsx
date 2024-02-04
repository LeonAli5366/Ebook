import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AllProducts } from "../../contextApi/ProductContext";

const Home = () => {
  const {products} = useContext(AllProducts)
  return (
    <div className="flex flex-col">
      <div className="w-full">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="
        h-[500px] w-full"
        >
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/T3JKShdQ/international-day-education-cartoon-style.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/HsgHKgSk/open-book-with-fairytale-scene.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/15D9vtst/scriptures-candles-wooden-table.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/yN33jR6G/view-3d-book-with-student.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/tgDSyLGP/creative-composition-world-book-day.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide className="w-full h-full">
            <img
              src="https://i.postimg.cc/ncyf92Gs/front-view-stacked-books-ladders-education-day.jpg"
              className="w-full object-cover h-full"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full flex flex-col items-center pt-10">
        <span className="text-3xl font-bold">Our Bookshelf</span>
        <span>Find everything you want</span>
        <div className="grid grid-cols-4 gap-4 w-full max-w-[1200px] pt-10">
          {products.map((d) => (
            <Bookshelf key={d._id} d={d} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Link
          to="/allproducts"
          className="border bg-white border-black hover:text-white hover:bg-black btn rounded text-black px-5 py-2"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Home;
