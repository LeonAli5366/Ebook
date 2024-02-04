import { useParams } from "react-router-dom";

const AddToCart = () => {
    const {id} = useParams();
    console.log(id)
  return (
    <div className="flex flex-row w-full mt-10 gap-10 max-w-[1200px] mx-auto h-[100vh]">
      <div className="w-[50%] flex flex-row items-start justify-end">
        <img
          src="https://cdn.youcan.shop/stores/ebooksoffice/products/ZyGwpKZIrtbL3gI1tDWH016wUGC3hXwjlvyLfaDC_lg.jpeg"
          alt=""
          className="w-[500px]"
        />
      </div>
      <div className="w-[50%] flex flex-col items-start gap-5">
        <span className="text-3xl font-bold">
          False Alarm: The Truth about the Epidemic of Fear by Marc Siegel
        </span>
        <div className="flex flex-row items-center gap-5">
        <span className="text-3xl ">328.03 tk</span>
        <span className="line-through text-lg text-[#808080]">1315.41 tk</span>
        </div>
        <button className="uppercase w-full py-2 bg-red-600 font-bold text-white">
          Add to cart
        </button>
        <span className="w-full text-center text-lg">Only 9 left in stoke</span>
        <span className="border-t pt-2 font-semibold">
          More relevant than ever as the Coronavirus, COVID-19 pandemic sweeps
          the globe, False Alarm (Originally released in 2008) reminds readers
          to look closely at the facts as the media covers the national pandemic
          news and spread of the virus, as well as reinforces the notion that we
          must arm ourselves against fear tactics that inhibit our abilities to
          properly make decisions in a world of uncertainty.
        </span>
        <span className="text-[#808080]">
          Life today for citizens of the developed world is safer, easier, and
          healthier than for any other people in history thanks to modern
          medicine, science, technology, and intelligence. So why is an epidemic
          of fear sweeping America? The answer, according to nationally renowned
          health commentator Dr. Marc Siegel, is that we live in an artificially
          created culture of fear. In False Alarm, Siegel identifies three major
          catalysts of the culture of fear—government, the media, and big
          pharma. With fascinating, blow-by-blow analyses of the most
          sensational false alarms of the past few years, he shows how these
          fearmongers manipulate our most primitive instincts—often without our
          even realizing it. False Alarm shows us how to look behind the hype
          and hysteria, inoculate ourselves against fear tactics, and develop
          the emotional and intellectual skills needed to take back our lives.
        </span>
      </div>
    </div>
  );
};

export default AddToCart;
