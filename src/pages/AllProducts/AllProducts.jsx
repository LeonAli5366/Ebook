import Bookshelf from "../../components/Bookshelf/Bookshelf";

const AllProducts = () => {
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
          id: 3,
          name: "The Confidence Game: Why We Fall for It. . .Every Time (Thorndike Crime Scene) by Maria Konnikova",
          img: "https://cdn.youcan.shop/stores/ebooksoffice/products/MoxaQSVVkYbMUZyC5jA6hgSV03HSw7SZ6AgFWAtS_md.jpeg",
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
          id: 3,
          name: "The Confidence Game: Why We Fall for It. . .Every Time (Thorndike Crime Scene) by Maria Konnikova",
          img: "https://cdn.youcan.shop/stores/ebooksoffice/products/MoxaQSVVkYbMUZyC5jA6hgSV03HSw7SZ6AgFWAtS_md.jpeg",
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
          id: 3,
          name: "The Confidence Game: Why We Fall for It. . .Every Time (Thorndike Crime Scene) by Maria Konnikova",
          img: "https://cdn.youcan.shop/stores/ebooksoffice/products/MoxaQSVVkYbMUZyC5jA6hgSV03HSw7SZ6AgFWAtS_md.jpeg",
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
    return (
        <div className="w-full flex flex-col items-center pt-10">
        <span className="text-3xl font-bold">Our Bookshelf</span>
        <span>Find everything you want</span>
        <div className="grid grid-cols-4 gap-4 w-full max-w-[1200px] pt-10">
          {data.map((d) => (
            <Bookshelf key={d.id} d={d} />
          ))}
        </div>
      </div>
    );
};

export default AllProducts;