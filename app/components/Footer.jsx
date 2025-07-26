import { FaFacebookF, FaLinkedin, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-10">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="block sm:flex sm:justify-around gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-3 flex items-center text-[24px]">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Fix And Flip Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  DSCR Rental Loans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Ground Up Construction Loans
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold text-lg mt-8 mb-3 text-[24px]">
              Where We Lend
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Florida
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Texas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Georgia
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-3 text-[24px]">
              Top Cities We Lend In
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Orlando
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Tampa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Miami
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Jacksonville
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Houston
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Austin
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Dallas
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  San Antonio
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold text-lg mb-3 text-[24px]">
              Top Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Loan Calculator
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  What is a Hard Money Loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  What is a Hard Money Loan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  How to find fix and flip deals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Best Cities for Fix and Flips
                </a>
              </li>
            </ul>

            <h4 className="text-white font-semibold text-lg mt-8 mb-3 text-[24px]">
              Useful Link
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Terms of Use
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold text-lg mb-3 text-[24px]">
              Contact Us
            </h3>

            <div className="mb-6">
              <h4 className="text-white font-medium mb-2">Email</h4>
              <div className="flex items-center gap-3">
                <MdOutlineMailOutline className="text-lg" />

                <a
                  href="mailto:loans@ridgestreetcap.com"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  loans@ridgestreetcap.com
                </a>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-white font-medium mb-2">Direct/Text</h4>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-lg" />

                <a
                  href="tel:786-304-2751"
                  className="text-white hover:text-white transition-colors text-[20px]"
                >
                  Phone: 786-304-2751
                </a>
              </div>
            </div>

            <div className="mb-6">
              <div className="bg-white text-primary px-4 py-2 rounded-lg inline-block">
                <span className="font-black text-lg">RIDGE</span>
                <span className="font-normal text-lg text-[#949293] ml-1">
                  STREET
                </span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="#" className="">
                <FaLinkedin className="text-[32px]" />
              </a>
              <a href="#" className="">
                <FaFacebookF className="text-[32px]" />
              </a>
              <a href="#" className="">
                <FaTwitter className="text-[32px]" />
              </a>
              <a href="#" className="">
                <FaInstagramSquare className="text-[32px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
