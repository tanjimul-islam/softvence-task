"use client";
import { GoDotFill } from "react-icons/go";
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
    items: 3,
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
const PastProjects = () => {
  return (
    <div
      id="land"
      className="bg-primary sm:px-6 pt-5 pb-8 sm:pt-[580px] sm:pb-30 -mt-[500px]"
    >
      <div className="container mx-auto px-4 ">
        <div className="text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-wide mb-4">
            Past Projects{" "}
          </h1>
          <p className="text-[16px] sm:text-[32px] mb-10 text-white ">
            A Proven Track Record Funding Projects Like These
          </p>
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
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
              <div className="relative">
                <img
                  src="https://placehold.co/500x350"
                  alt="Property Interior"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>

              <div className="py-6 px-8 bg-white">
                <h2 className="text-[24px] font-semibold text-primary mb-3 text-center">
                  4321 Alton Rd, Miami Beach
                </h2>

                <div className="flex justify-center items-center gap-2 pb-8 border-b border-[#DCDCDC]">
                  <span className="w-4 h-4 bg-gray-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-primary text-sm">Miami, Florida</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 border-b border-[#DCDCDC] py-4.5">
                  <div className="flex items-center gap-3 ">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0 "></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2350 Square Feet
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        4 Garages
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2 Bedrooms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        3 Bathrooms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm ">
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Loan Amount: </span>
                    <span className="text-gray-900 font-semibold">
                      $328,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">LTV: </span>
                    <span className="text-gray-900 font-semibold">84.65%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Rate: </span>
                    <span className="text-gray-900 font-semibold">11.75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">Term: </span>
                    <span className="text-gray-900 font-semibold">
                      12 Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#165831_0%,_#0D4022_100%)] text-white text-center py-4">
                <div className="text-2xl font-bold">$3,45,000</div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
              <div className="relative">
                <img
                  src="https://placehold.co/500x350"
                  alt="Property Interior"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>

              <div className="py-6 px-8 bg-white">
                <h2 className="text-[24px] font-semibold text-primary mb-3 text-center">
                  4321 Alton Rd, Miami Beach
                </h2>

                <div className="flex justify-center items-center gap-2 pb-8 border-b border-[#DCDCDC]">
                  <span className="w-4 h-4 bg-gray-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-primary text-sm">Miami, Florida</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 border-b border-[#DCDCDC] py-4.5">
                  <div className="flex items-center gap-3 ">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0 "></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2350 Square Feet
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        4 Garages
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2 Bedrooms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        3 Bathrooms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm ">
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Loan Amount: </span>
                    <span className="text-gray-900 font-semibold">
                      $328,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">LTV: </span>
                    <span className="text-gray-900 font-semibold">84.65%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Rate: </span>
                    <span className="text-gray-900 font-semibold">11.75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">Term: </span>
                    <span className="text-gray-900 font-semibold">
                      12 Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#165831_0%,_#0D4022_100%)] text-white text-center py-4">
                <div className="text-2xl font-bold">$3,45,000</div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
              <div className="relative">
                <img
                  src="https://placehold.co/500x350"
                  alt="Property Interior"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>

              <div className="py-6 px-8 bg-white">
                <h2 className="text-[24px] font-semibold text-primary mb-3 text-center">
                  4321 Alton Rd, Miami Beach
                </h2>

                <div className="flex justify-center items-center gap-2 pb-8 border-b border-[#DCDCDC]">
                  <span className="w-4 h-4 bg-gray-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-primary text-sm">Miami, Florida</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 border-b border-[#DCDCDC] py-4.5">
                  <div className="flex items-center gap-3 ">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0 "></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2350 Square Feet
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        4 Garages
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2 Bedrooms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        3 Bathrooms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm ">
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Loan Amount: </span>
                    <span className="text-gray-900 font-semibold">
                      $328,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">LTV: </span>
                    <span className="text-gray-900 font-semibold">84.65%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Rate: </span>
                    <span className="text-gray-900 font-semibold">11.75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">Term: </span>
                    <span className="text-gray-900 font-semibold">
                      12 Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#165831_0%,_#0D4022_100%)] text-white text-center py-4">
                <div className="text-2xl font-bold">$3,45,000</div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
              <div className="relative">
                <img
                  src="https://placehold.co/500x350"
                  alt="Property Interior"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>

              <div className="py-6 px-8 bg-white">
                <h2 className="text-[24px] font-semibold text-primary mb-3 text-center">
                  4321 Alton Rd, Miami Beach
                </h2>

                <div className="flex justify-center items-center gap-2 pb-8 border-b border-[#DCDCDC]">
                  <span className="w-4 h-4 bg-gray-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-primary text-sm">Miami, Florida</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 border-b border-[#DCDCDC] py-4.5">
                  <div className="flex items-center gap-3 ">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0 "></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2350 Square Feet
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        4 Garages
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2 Bedrooms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        3 Bathrooms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm ">
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Loan Amount: </span>
                    <span className="text-gray-900 font-semibold">
                      $328,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">LTV: </span>
                    <span className="text-gray-900 font-semibold">84.65%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Rate: </span>
                    <span className="text-gray-900 font-semibold">11.75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">Term: </span>
                    <span className="text-gray-900 font-semibold">
                      12 Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#165831_0%,_#0D4022_100%)] text-white text-center py-4">
                <div className="text-2xl font-bold">$3,45,000</div>
              </div>
            </div>
          </div>
          <div>
            <div className="rounded-3xl overflow-hidden shadow-lg mb-10">
              <div className="relative">
                <img
                  src="https://placehold.co/500x350"
                  alt="Property Interior"
                  className="w-full h-[280px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1.5 rounded-md text-sm font-medium">
                  For Sale
                </div>
              </div>

              <div className="py-6 px-8 bg-white">
                <h2 className="text-[24px] font-semibold text-primary mb-3 text-center">
                  4321 Alton Rd, Miami Beach
                </h2>

                <div className="flex justify-center items-center gap-2 pb-8 border-b border-[#DCDCDC]">
                  <span className="w-4 h-4 bg-gray-400 rounded-sm flex-shrink-0"></span>
                  <span className="text-primary text-sm">Miami, Florida</span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 border-b border-[#DCDCDC] py-4.5">
                  <div className="flex items-center gap-3 ">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0 "></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2350 Square Feet
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        4 Garages
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        2 Bedrooms
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-5 h-5 bg-gray-400 rounded-sm flex-shrink-0"></span>
                    <div>
                      <div className="text-gray-900 font-medium text-sm">
                        3 Bathrooms
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 text-sm ">
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Loan Amount: </span>
                    <span className="text-gray-900 font-semibold">
                      $328,000
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">LTV: </span>
                    <span className="text-gray-900 font-semibold">84.65%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]"> Rate: </span>
                    <span className="text-gray-900 font-semibold">11.75%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>
                      <GoDotFill />
                    </span>
                    <span className="text-[#343434]">Term: </span>
                    <span className="text-gray-900 font-semibold">
                      12 Months
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-[radial-gradient(50%_50%_at_50%_50%,_#165831_0%,_#0D4022_100%)] text-white text-center py-4">
                <div className="text-2xl font-bold">$3,45,000</div>
              </div>
            </div>
          </div>
        </Carousel>
        <div className="">
          <button className="bg-white text-primary text-sm sm:text-lg pl-6 pr-2 py-1 rounded-lg font-semibold flex items-center justify-center -skew-x-12 m-auto cursor-pointer">
            <p>Get Terms For Your Project</p>
            <span className="bg-white p-2 flex items-center justify-center">
              <RiArrowRightDoubleFill className="bg-primary text-white text-2xl sm:text-3xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PastProjects;
