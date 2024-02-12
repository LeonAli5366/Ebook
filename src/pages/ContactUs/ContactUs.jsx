const ContactUs = () => {
    return (
        <div className="flex flex-col items-center xl:px-0 px-[5%] h-[100vh]">
            <span className="uppercase text-[#4086C6] md:text-2xl text-xl font-medium tracking-wider mt-5">contact us</span>
            <div className="max-w-[800px] w-full flex flex-col gap-5 mt-5">
            <div className=" w-full flex flex-row items-center gap-5">
                <input type="text" name="" id="" placeholder="Your name" className="border w-full py-3 pl-2" />
                <input type="text" name="" id="" placeholder="Your email" className="border w-full py-3 pl-2" />
            </div>
            <input type="text" name="" id="" className=" w-full border pb-[200px] pt-2 pl-2" placeholder="Your message"/>
            <button className="w-full bg-black text-white uppercase text-xs tracking-wider py-4 hover:bg-transparent hover:border-black hover:text-black border btn">send message</button>
            </div>
        </div>
    );
};

export default ContactUs;