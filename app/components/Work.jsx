import { GoArrowUpRight } from "react-icons/go";

import Image from "next/image";
const Work = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-5 pb-8 sm:pt-30 sm:pb-30">
      <div className="text-center mb-8 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
          Interested In Working With Us?
        </h1>
      </div>
      <div className="my-12 px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9.5">
          <div className="bg-white border-2 border-[#B3BAC5] rounded-2xl flex flex-col items-center justify-center text-center relative p-12">
            <div className="w-30 h-24 bg-[#EEFFF5] rounded-lg flex items-center justify-center mb-1.5 p-5 -skew-x-12">
              <Image src="/assets/loan-1.png" width={70} height={70} alt="" />
            </div>

            <h2 className="text-2xl font-bold text-green-800 mb-3.5">
              Active Deal
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I have an active deal and would
              <br />
              like a Term Sheet
            </p>

            <button className="bg-white border-2 border-primary text-primary  px-8 py-5 rounded-xl text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2">
              Find a home
              <span className="text-sm">
                <GoArrowUpRight className="text-xl" />
              </span>
            </button>
          </div>
          <div className="bg-white border-2 border-[#B3BAC5] rounded-2xl flex flex-col items-center justify-center text-center relative p-12">
            <div className="w-30 h-24 bg-[#EEFFF5] rounded-lg flex items-center justify-center mb-1.5 p-5 -skew-x-12">
              <Image src="/assets/loan-1.png" width={70} height={70} alt="" />
            </div>

            <h2 className="text-2xl font-bold text-green-800 mb-3.5">
              Active Deal
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I have an active deal and would
              <br />
              like a Term Sheet
            </p>

            <button className="bg-white border-2 border-primary text-primary  px-8 py-5 rounded-xl text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2">
              Find a home
              <span className="text-sm">
                <GoArrowUpRight className="text-xl" />
              </span>
            </button>
          </div>
          <div className="bg-white border-2 border-[#B3BAC5] rounded-2xl flex flex-col items-center justify-center text-center relative p-12">
            <div className="w-30 h-24 bg-[#EEFFF5] rounded-lg flex items-center justify-center mb-1.5 p-5 -skew-x-12">
              <Image src="/assets/loan-1.png" width={70} height={70} alt="" />
            </div>

            <h2 className="text-2xl font-bold text-green-800 mb-3.5">
              Active Deal
            </h2>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              I have an active deal and would
              <br />
              like a Term Sheet
            </p>

            <button className="bg-white border-2 border-primary text-primary  px-8 py-5 rounded-xl text-[15px] font-semibold hover:bg-primary hover:text-white transition-colors duration-200 flex items-center gap-2">
              Find a home
              <span className="text-sm">
                <GoArrowUpRight className="text-xl" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
