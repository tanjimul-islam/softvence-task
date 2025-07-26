import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiArrowRightDoubleFill } from "react-icons/ri";

const LoanProducts = () => {
  return (
    <div
      id="loan"
      className="container mx-auto px-4 sm:px-6 pt-5 pb-8 sm:pt-20 sm:pb-30"
    >
      <div className="text-center mb-8 sm:mb-20">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide">
          LOAN PRODUCTS
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col items-center justify-center">
          <div className="bg-primary rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
            <svg
              className="w-12 h-12 sm:w-20 sm:h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">
            Fix and Flip
          </h2>
          <p className="text-sm sm:text-base text-primary font-medium mb-4">
            Funding For Rehab + Purchase
          </p>

          <div className="space-y-3 mb-5 w-full">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                $50,000 up to $3,000,000
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Interest Rate 10.5%-12.99%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Origination Fee From 1.5%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Up to 85% of Purchase and 100% of Rehab
              </span>
            </div>
          </div>

          <div className="w-full mb-5">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary font-semibold underline">
                Learn More
              </span>
            </div>
          </div>

          <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12">
            <p>GET APPROVED ONLINE</p>
            <span className="bg-white p-2 flex items-center justify-center">
              <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
            </span>
          </button>
        </div>
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col items-center justify-center">
          <div className="bg-primary rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
            <svg
              className="w-12 h-12 sm:w-20 sm:h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">
            Fix and Flip
          </h2>
          <p className="text-sm sm:text-base text-primary font-medium mb-4">
            Funding For Rehab + Purchase
          </p>

          <div className="space-y-3 mb-5 w-full">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                $50,000 up to $3,000,000
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Interest Rate 10.5%-12.99%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Origination Fee From 1.5%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Up to 85% of Purchase and 100% of Rehab
              </span>
            </div>
          </div>

          <div className="w-full mb-5">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary font-semibold underline">
                Learn More
              </span>
            </div>
          </div>

          <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12">
            <p>GET APPROVED ONLINE</p>
            <span className="bg-white p-2 flex items-center justify-center">
              <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
            </span>
          </button>
        </div>
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl flex flex-col items-center justify-center">
          <div className="bg-primary rounded-xl p-4 sm:p-5 w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center mb-5">
            <svg
              className="w-12 h-12 sm:w-20 sm:h-20 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-10-5zM7 9v6h2v-6H7zm4 0v6h2v-6h-2zm4 0v6h2v-6h-2z" />
            </svg>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mb-2 text-primary">
            Fix and Flip
          </h2>
          <p className="text-sm sm:text-base text-primary font-medium mb-4">
            Funding For Rehab + Purchase
          </p>

          <div className="space-y-3 mb-5 w-full">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                $50,000 up to $3,000,000
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Interest Rate 10.5%-12.99%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Origination Fee From 1.5%
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary">
                Up to 85% of Purchase and 100% of Rehab
              </span>
            </div>
          </div>

          <div className="w-full mb-5">
            <div className="flex items-center gap-2.5">
              <IoMdCheckmarkCircleOutline className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              <span className="text-sm sm:text-base text-primary font-semibold underline">
                Learn More
              </span>
            </div>
          </div>

          <button className="bg-primary text-white text-sm sm:text-lg pl-6 pr-2 py-2 rounded-lg font-semibold w-full flex text-left items-center justify-between -skew-x-12">
            <p>GET APPROVED ONLINE</p>
            <span className="bg-white p-2 flex items-center justify-center">
              <RiArrowRightDoubleFill className="text-primary text-2xl sm:text-3xl" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoanProducts;
