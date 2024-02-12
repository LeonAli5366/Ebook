import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useContext } from "react";
import { AllProducts } from "../../contextApi/ProductContext";

const Home = () => {
  const { products } = useContext(AllProducts);
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
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640:{
              slidesPerView: 2
            },
            1024:{
              slidesPerView:3
            }
          }}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="
          sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] h-[150px] w-full"
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
      <div className="w-full flex flex-col items-center px-[20%] sm:px-[25%] md:px-[15%] lg:px-[10%] xl:px-[5%] pt-10 mx-auto">
        <span className="xl:text-3xl text-2xl font-bold">Our Bookshelf</span>
        <span className="text-sm">Find everything you want</span>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 w-full max-w-[1200px] pt-10">
          {products.map((d) => (
            <Bookshelf key={d._id} d={d} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center test">
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
