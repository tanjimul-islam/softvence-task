"use client";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Reviews = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 pt-5 pb-8 sm:pt-20 sm:pb-20">
      <div className="text-center mb-8 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
          Ridge Street Client Reviews
        </h1>
      </div>
      <Carousel
        itemClass="custom-gap"
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
      >
        <div className="relative">
          <div className="bg-white/85 rounded-3xl p-8 text-center relative z-10 shadow-xl">
            <div className="w-35 h-35 mx-auto mb-6 -mt-[50%] ">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">Name Here</h3>

            <h4 className="text-lg font-semibold text-primary mb-6">
              What an amazing experience
            </h4>

            <p
              className="text-[#343434] text-sm leading-relaxed text-left leading-[170%]
"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit
              amet ligula at libero ullamcorper fringilla. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer euismod libero eu quam efficitur, a elementum sem
              fermentum. Fusce vel ante vel ex cursus.
            </p>
          </div>
        </div>

        <div className="">
          <div className="bg-white/80 rounded-3xl p-8 text-center relative z-10 shadow-xl">
            <div className="w-35 h-35 mx-auto mb-6 -mt-[50%] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">Name Here</h3>

            <h4 className="text-lg font-semibold text-primary mb-6">
              What an amazing experience
            </h4>

            <p
              className="text-[#343434] text-sm leading-relaxed text-left leading-[170%]
"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit
              amet ligula at libero ullamcorper fringilla. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer euismod libero eu quam efficitur, a elementum sem
              fermentum. Fusce vel ante vel ex cursus.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white/80 rounded-3xl p-8 text-center relative z-10 shadow-xl">
            <div className="w-35 h-35 mx-auto mb-6 -mt-[50%] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">Name Here</h3>

            <h4 className="text-lg font-semibold text-primary mb-6">
              What an amazing experience
            </h4>

            <p
              className="text-[#343434] text-sm leading-relaxed text-left leading-[170%]
"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit
              amet ligula at libero ullamcorper fringilla. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer euismod libero eu quam efficitur, a elementum sem
              fermentum. Fusce vel ante vel ex cursus.
            </p>
          </div>
        </div>
        <div className="">
          <div className="bg-white/80 rounded-3xl p-8 text-center relative z-10 shadow-xl">
            <div className="w-35 h-35 mx-auto mb-6 -mt-[50%] relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>

            <h3 className="text-2xl font-bold text-primary mb-2">Name Here</h3>

            <h4 className="text-lg font-semibold text-primary mb-6">
              What an amazing experience
            </h4>

            <p
              className="text-[#343434] text-sm leading-relaxed text-left leading-[170%]
"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor ex ut turpis congue, a accumsan elit ultricies. Vivamus sit
              amet ligula at libero ullamcorper fringilla. Pellentesque habitant
              morbi tristique senectus et netus et malesuada fames ac turpis
              egestas. Integer euismod libero eu quam efficitur, a elementum sem
              fermentum. Fusce vel ante vel ex cursus.
            </p>
          </div>
        </div>
      </Carousel>

      <div className="mt-10 sm:mt-20">
        <button className="bg-white text-primary text-sm sm:text-lg pl-6 pr-2 py-1 rounded-lg font-semibold flex items-center justify-center -skew-x-12 m-auto cursor-pointe capitalizer">
          <p>Get Terms For Your Project</p>
          <span className="bg-white p-2 flex items-center justify-center">
            <RiArrowRightDoubleFill className="bg-primary text-white text-2xl sm:text-3xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Reviews;
