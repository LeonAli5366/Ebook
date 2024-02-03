import { useState } from "react";
import Bookshelf from "../../components/Bookshelf/Bookshelf";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay } from "swiper/modules";

const Home = () => {
  const data = [
    {
      id: 1,
      name: "False Alarm: The Truth about the Epidemic of Fear by Marc Siegel",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/ZyGwpKZIrtbL3gI1tDWH016wUGC3hXwjlvyLfaDC_md.jpeg",
      previous_price: 1000,
      price: 876.58,
    },
    {
      id: 2,
      name: "The Biggest Bluff: How I Learned to Pay Attention, Master Myself, and Win by Maria Konnikova",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/aZqStbO0BUGQIDLiwD3lecS3908m21ysvFAnQQED_md.jpeg",
      previous_price: 1315.41,
      price: 328.03,
    },
    {
      id: 3,
      name: "The Confidence Game: Why We Fall for It. . .Every Time (Thorndike Crime Scene) by Maria Konnikova",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/MoxaQSVVkYbMUZyC5jA6hgSV03HSw7SZ6AgFWAtS_md.jpeg",
      previous_price: 1315.41,
      price: 328.03,
    },
    {
      id: 4,
      name: "the book",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/KoFfFXTYXccrNt3wfu7lqNBTZ3G9fS9lfuM5rHLQ_md.jpeg",
      price: 876.58,
    },
    {
      id: 1,
      name: "False Alarm: The Truth about the Epidemic of Fear by Marc Siegel",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/ZyGwpKZIrtbL3gI1tDWH016wUGC3hXwjlvyLfaDC_md.jpeg",
      previous_price: 1000,
      price: 876.58,
    },
    {
      id: 2,
      name: "The Biggest Bluff: How I Learned to Pay Attention, Master Myself, and Win by Maria Konnikova",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/aZqStbO0BUGQIDLiwD3lecS3908m21ysvFAnQQED_md.jpeg",
      previous_price: 1315.41,
      price: 328.03,
    },
    {
      id: 3,
      name: "The Confidence Game: Why We Fall for It. . .Every Time (Thorndike Crime Scene) by Maria Konnikova",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/MoxaQSVVkYbMUZyC5jA6hgSV03HSw7SZ6AgFWAtS_md.jpeg",
      previous_price: 1315.41,
      price: 328.03,
    },
    {
      id: 4,
      name: "the book",
      img: "https://cdn.youcan.shop/stores/ebooksoffice/products/KoFfFXTYXccrNt3wfu7lqNBTZ3G9fS9lfuM5rHLQ_md.jpeg",
      price: 876.58,
    },
  ];

  // const [active, setActive] = useState('1')
  // const handleClick = (event)=>{
  //   setActive(event.target.id)
  // }
  return (
    <div className="flex flex-col">
      {/* <div className="flex flex-row items-center justify-between gap-5 w-full">
        <div className="w-full h-[700px] overflow-hidden relative">
          <img src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_640.jpg" alt="" className="object-cover w-full h-full img-1" />
          <button className="absolute bottom-10 left-10 bg-white px-6 py-3 uppercase text-xs tracking-wider font-semibold hover:bg-transparent hover:border-white hover:text-white border btn">view products</button>
        </div>
        <div className="w-full h-[700px] overflow-hidden relative">
          <img src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg" alt="" className="object-cover w-full h-full img-1" />
          <button className="absolute bottom-10 left-10 bg-white px-6 py-3 uppercase text-xs tracking-wider font-semibold hover:bg-transparent hover:border-white hover:text-white border btn">view products</button>
        </div>
        
      </div> */}
      {/* <div className="w-full h-[500px]">
        <img src="https://cdn.youcan.shop/stores/ebooksoffice/others/VcjuXZHLo1exLor9dw7oD4p0y6jzxatmv7Wv1dUL.jpeg" alt="" className="w-full h-full object-cover object-top" />
      </div> */}
      {/* <div className="w-full h-[500px] flex flex-row items-center justify-center gap-5 my-10">
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/T3JKShdQ/international-day-education-cartoon-style.jpg")`
          }}
          id="1"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '1' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/HsgHKgSk/open-book-with-fairytale-scene.jpg")`
          }}
          id="2"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '2' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/15D9vtst/scriptures-candles-wooden-table.jpg")`
          }}
          id="3"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '3' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/yN33jR6G/view-3d-book-with-student.jpg")`
          }}
          id="4"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '4' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/tgDSyLGP/creative-composition-world-book-day.jpg")`
          }}
          id="5"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '5' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        <div
          style={{
            backgroundImage: `url("https://i.postimg.cc/ncyf92Gs/front-view-stacked-books-ladders-education-day.jpg")`
          }}
          id="6"
          onClick={handleClick}
          className={`bg-center   rounded-[2rem] h-full img ${active === '6' ?'w-[700px]': 'w-[50px] '}`}
        ></div>
        
      </div> */}
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
          modules={[Pagination,Autoplay]}
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
          {data.map((d) => (
            <Bookshelf key={d.id} d={d} />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Link
          to="/allproducts"
          className="border border-black hover:text-white hover:bg-black btn rounded text-black px-5 py-2"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default Home;
