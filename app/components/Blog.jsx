import Link from "next/link";

const Blog = () => {
  return (
    <div id="land" className="sm:px-6 pt-5 pb-8 sm:pt-24 sm:pb-24">
      <div className="container mx-auto px-4 ">
        <div className="text-left flex justify-between items-end mb-14 ">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-primary tracking-wide max-w-3xl">
            Other Resources You’ll Like
          </h1>
          <a
            href=""
            className="text-[18px] font-semibold px-8 py-5 bg-primary text-white rounded-full uppercase"
          >
            View More
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full p-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Modern house with dark blue siding and brown garage"
                className="w-full h-72 object-cover rounded-3xl"
              />
            </div>

            <div className="py-8">
              <p className="text-[#343434] text-base font-normal mb-6 italic">
                May 9, 2024
              </p>

              <h1 className="text-2xl font-bold text-primary mb-4 leading-tight">
                <Link href="#">
                  Investor's Guide To Real Estate Wholetailing
                </Link>
              </h1>

              <p className="text-[#343434] text-base leading-relaxed">
                Real estate wholetailing investment technique that combines the
                best aspects of two of the most common strategies - flipping
                houses and wholesaling. With wholetailing, you can earn large.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full p-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Modern house with dark blue siding and brown garage"
                className="w-full h-72 object-cover rounded-3xl"
              />
            </div>

            <div className="py-8">
              <p className="text-[#343434] text-base font-normal mb-6 italic">
                May 9, 2024
              </p>

              <h1 className="text-2xl font-bold text-primary mb-4 leading-tight">
                <Link href="#">
                  Investor's Guide To Real Estate Wholetailing
                </Link>
              </h1>

              <p className="text-[#343434] text-base leading-relaxed">
                Real estate wholetailing investment technique that combines the
                best aspects of two of the most common strategies - flipping
                houses and wholesaling. With wholetailing, you can earn large.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-full p-8">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Modern house with dark blue siding and brown garage"
                className="w-full h-72 object-cover rounded-3xl"
              />
            </div>

            <div className="py-8">
              <p className="text-[#343434] text-base font-normal mb-6 italic">
                May 9, 2024
              </p>

              <h1 className="text-2xl font-bold text-primary mb-4 leading-tight">
                <Link href="#">
                  Investor's Guide To Real Estate Wholetailing
                </Link>
              </h1>

              <p className="text-[#343434] text-base leading-relaxed">
                Real estate wholetailing investment technique that combines the
                best aspects of two of the most common strategies - flipping
                houses and wholesaling. With wholetailing, you can earn large.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
