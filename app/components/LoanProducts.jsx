import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const LoanProducts = () => {
  return (
    <div
      id="loan"
      className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-5 pb-8 sm:pt-20 sm:pb-30"
    >
      <div className="w-full max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-16 lg:mb-20">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
            LOAN PRODUCTS
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1 - Fix and Flip */}
          <div className="bg-primary rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col items-center justify-center h-[564px]">
            <div className="bg-white rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-white text-center">
              Fix and Flip
            </h2>
            <p className="text-sm sm:text-base text-white font-medium mb-6 text-center">
              Funding For Rehab + Purchase
            </p>

            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">
                  $50,000 up to $3,000,000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">
                  Interest Rate 10.5%-12.99%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">
                  Origination Fee From 1.5%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white">
                  Up to 85% of Purchase and 100% of Rehab
                </span>
              </div>
            </div>

            <div className="w-full mb-6">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white font-semibold underline cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-white text-primary text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12 hover:bg-gray-50 transition-colors gap-4 uppercase">
                <p>GET APPROVED ONLINE</p>
                <span className="bg-primary p-2 flex items-center justify-center">
                  <RiArrowRightDoubleFill className="text-white text-2xl sm:text-3xl" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 2 - Rental Property */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col items-center justify-center relative overflow-hidden h-[564px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

            <div className="bg-primary rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary text-center">
              Rental Property
            </h2>
            <p className="text-sm sm:text-base text-primary font-medium mb-6 text-center">
              30 Year DSCR loans in Florida and Texas
            </p>

            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Up to $1,500,000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Interest Rate 6.75%-8.25%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Origination Fee From 1.5%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Up to 85% of LTV
                </span>
              </div>
            </div>

            <div className="w-full mb-6">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary font-semibold underline cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12 hover:bg-primary/90 transition-colors gap-4 uppercase">
                <p>GET APPROVED ONLINE</p>
                <span className="bg-white p-2 flex items-center justify-center">
                  <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
                </span>
              </button>
            </div>
          </div>

          {/* Card 3 - Ground Up Construction */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl flex flex-col items-center justify-center relative overflow-hidden h-[564px]">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary"></div>

            <div className="bg-primary rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
              <svg
                className="w-10 h-10 sm:w-12 sm:h-12 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary text-center">
              Ground Up Construction
            </h2>
            <p className="text-sm sm:text-base text-primary font-medium mb-6 text-center">
              Ground Up Construction loans in Florida and Texas
            </p>

            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Up to $3,500,000
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Interest Rate 11.25%-13.25%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Origination Fee From 1.5%
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary">
                  Up to 80% of LTC
                </span>
              </div>
            </div>

            <div className="w-full mb-6">
              <div className="flex items-center gap-2.5">
                <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                <span className="text-sm sm:text-base text-primary font-semibold underline cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>

            <div className="mt-auto">
              <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12 hover:bg-primary/90 transition-colors gap-4 uppercase">
                <p>GET APPROVED ONLINE</p>
                <span className="bg-white p-2 flex items-center justify-center">
                  <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanProducts;
