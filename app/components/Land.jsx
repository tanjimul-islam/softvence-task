import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";
const Land = () => {
  return (
    <div id="land" className="bg-primary sm:px-6 pt-5 pb-8 sm:pt-30 sm:pb-30">
      <div className="container mx-auto px-4 ">
        <div className="text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide mb-5">
            Where We Lend
          </h1>
          <p className="text-[16px] sm:text-[24px] text-white ">
            Ridge Street provides hard money loans to real estate investors in
            35 states.
          </p>
          <p className="text-[16px] sm:text-[24px] text-white">
            We focus our efforts in{" "}
            <b className="text-[32px] font-semibold">Texas</b> and{" "}
            <b className="text-[32px] font-semibold">Florida</b>.
          </p>
        </div>
        <div className="py-8 sm:py-20 ">
          <Image
            src="/assets/map.png"
            width={1000}
            height={1000}
            className="w-full h-auto"
            alt=""
          />
        </div>
        <div className="flex justify-around ">
          <div className="rounded-tr-[60px] border border-white flex flex-col items-center justify-center bg-[url(https://placehold.co/440x560)] bg-cover no-bg-repeat bg-bg-center py-40 px-7">
            <h1 className="text-[56px] font-extrabold mb-2.5">Texas</h1>
            <p className="text-[24px] mb-10">Hard Money Loans | DSCR Loans</p>
            <a
              href=""
              className="border p-5 uppercase rounded-full font-bold text-[20px]"
            >
              View All Locations
            </a>
          </div>
          <div className="rounded-br-[60px] border border-white flex flex-col items-center justify-center bg-[url(https://placehold.co/440x560)] bg-cover no-bg-repeat bg-bg-center py-40 px-7">
            <h1 className="text-[56px] font-extrabold mb-2.5">Texas</h1>
            <p className="text-[24px] mb-10">Hard Money Loans | DSCR Loans</p>
            <a
              href=""
              className="border p-5 uppercase rounded-full font-bold text-[20px]"
            >
              View All Locations
            </a>
          </div>
        </div>
        <div className="mt-10 sm:mt-20">
          <button className="bg-white text-primary text-sm sm:text-lg pl-6 pr-2 py-1 rounded-lg font-semibold flex items-center justify-center -skew-x-12 m-auto cursor-pointer">
            <p>View All Locations</p>
            <span className="bg-white p-2 flex items-center justify-center">
              <RiArrowRightDoubleFill className="bg-primary text-white text-2xl sm:text-3xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Land;
