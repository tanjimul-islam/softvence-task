import { RiArrowRightDoubleFill } from "react-icons/ri";
const Hero = () => {
  return (
    <div className="bg-[url(/assets/hero-bg.png)] bg-cover bg-center bg-no-repeat relative">
      py-4 md:py-6
      <div className="container mx-auto px-4 sm:px-6 pt-5 pb-8 sm:pt-20 sm:pb-30 h-screen flex justify-center items-center ">
        <div className="absolute w-full h-full top-0 left-0 bg-[url(/assets/hero-overlay.png)] bg-center bg-cover"></div>
        <div className="block sm:grid sm:grid-cols-2 z-10">
          <div className="">
            <h1 className="text-4xl leading-12 sm:text-[60px] font-black tracking-[-0.6px] sm:leading-none text-primary mb-5">
              Florida and Texas Hard Money Lenders
            </h1>
            <p className="text-[24px] sm:text-[32px] text-[#343434] mb-15">
              Fast Closing Fix and Flip and Rental Loans For Your Investment
              Properties.
            </p>
            <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-auto flex text-left items-center justify-between -skew-x-12 gap-4">
              <p>GET APPROVED ONLINE</p>
              <span className="bg-white p-2 flex items-center justify-center">
                <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
              </span>
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
