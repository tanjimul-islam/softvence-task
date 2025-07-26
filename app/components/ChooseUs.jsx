import Image from "next/image";
import { RiArrowRightDoubleFill } from "react-icons/ri";
const ChooseUs = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-5 pb-8 sm:pt-30 sm:pb-30">
      <div className="text-center mb-8 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
          Why choose us
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-9">
        <div className="border border-[#B3BAC5] p-6 md:p-8 lg:p-10 pb-36 md:pb-44 lg:pb-[190px] relative overflow-hidden">
          <h2 className="text-2xl md:text-[26px] lg:text-[28px] text-[#1c1c1c] font-bold mb-4 md:mb-5">
            Simple Online Application
          </h2>
          <p className="text-sm md:text-base">
            Easy 2 minute online application, with no credit pull required.
          </p>
          <div className="w-[120px] md:w-[140px] lg:w-[164px] h-[120px] md:h-[140px] lg:h-[150px] bg-[#EEFFF5] -skew-x-12 flex flex-col items-center justify-center absolute left-0 bottom-0 mt-10 md:mt-12 lg:mt-14">
            <Image
              src="/assets/choose-us-1.png"
              width={88}
              height={88}
              alt=""
            />
          </div>
        </div>

        <div className="border border-[#B3BAC5] p-6 md:p-8 lg:p-10 pb-36 md:pb-44 lg:pb-[190px] relative overflow-hidden">
          <h2 className="text-2xl md:text-[26px] lg:text-[28px] text-[#1c1c1c] font-bold mb-4 md:mb-5">
            Simple Online Application
          </h2>
          <p className="text-sm md:text-base">
            Easy 2 minute online application, with no credit pull required.
          </p>
          <div className="w-[120px] md:w-[140px] lg:w-[164px] h-[120px] md:h-[140px] lg:h-[150px] bg-[#EEFFF5] -skew-x-12 flex flex-col items-center justify-center absolute left-0 bottom-0 mt-10 md:mt-12 lg:mt-14">
            <Image
              src="/assets/choose-us-2.png"
              width={88}
              height={88}
              alt=""
            />
          </div>
        </div>

        <div className="border border-[#B3BAC5] p-6 md:p-8 lg:p-10 pb-36 md:pb-44 lg:pb-[190px] relative overflow-hidden">
          <h2 className="text-2xl md:text-[26px] lg:text-[28px] text-[#1c1c1c] font-bold mb-4 md:mb-5">
            Simple Online Application
          </h2>
          <p className="text-sm md:text-base">
            Easy 2 minute online application, with no credit pull required.
          </p>
          <div className="w-[120px] md:w-[140px] lg:w-[164px] h-[120px] md:h-[140px] lg:h-[150px] bg-[#EEFFF5] -skew-x-12 flex flex-col items-center justify-center absolute left-0 bottom-0 mt-10 md:mt-12 lg:mt-14">
            <Image
              src="/assets/choose-us-3.png"
              width={88}
              height={88}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="mt-8 sm:mt-12">
        <button className="bg-white text-primary text-sm sm:text-lg pl-6 pr-2 py-1 rounded-lg font-semibold flex items-center justify-center -skew-x-12 m-auto cursor-pointer gap-4.5">
          <p>More About Us</p>
          <span className="bg-primary p-2 flex items-center justify-center">
            <RiArrowRightDoubleFill className="text-white text-2xl sm:text-3xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;
