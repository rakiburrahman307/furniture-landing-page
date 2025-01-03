import { FaFacebookSquare } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E9F4EE] px-6 py-10">
      {/* Main Footer Content */}
      <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center md:items-start gap-10 lg:gap-40 pt-10 lg:pt-32">
        {/* Brand and Social Media Section */}
        <div className="space-y-5 text-center lg:text-left">
          <h3 className="text-[28px] lg:text-[38.87px] font-bebas">Timber Trove</h3>
          <p className="font-robotoSerif text-[16px] lg:text-[17.28px]">Social Media</p>
          <div className="flex justify-center lg:justify-start gap-4 lg:gap-10">
            <FaFacebookSquare size={25} className="cursor-pointer" />
            <CiTwitter size={25} className="cursor-pointer" />
            <FaInstagram size={25} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex gap-10 md:gap-32">
          {/* Shop Links Section */}
        <div className="space-y-5 text-center lg:text-left">
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">SHOP</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Products</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Overview</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Pricing</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Releases</p>
        </div>

        {/* Company Links Section */}
        <div className="space-y-5 text-center lg:text-left">
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Company</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">About us</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Contact</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">News</p>
          <p className="text-[16px] lg:text-[17.28px] font-robotoSerif">Support</p>
        </div>
        </div>

        {/* Newsletter Section */}
        <div className="space-y-5 text-center md:text-left flex flex-col justify-center items-canter">
          <p className="font-robotoSerif text-[16px] lg:text-[17.28px]">Stay up to date</p>
          <form aria-labelledby="newsletter-headline">
            <div className="sm:flex items-center max-w-[382.44px] mx-auto lg:mx-0">
              <input
                name="EMAIL"
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full lg:w-[427px] px-5 py-3 text-base rounded-s-md leading-6 transition duration-150 ease-in-out border-2 appearance-none focus:outline-none border-black text-gray-900 placeholder-gray-500 focus:placeholder-gray-400 bg-white"
              />
              <div className="mt-3 sm:mt-0 sm:flex-shrink-0">
                <button
                  type="submit"
                  className=" px-5 py-3 text-white transition duration-200 ease-in-out bg-black border border-transparent shadow-sm hover:bg-gray-800 focus:border-black focus:ring-2 focus:ring-black focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-10 lg:mt-32">
        <div className="w-full border-t-2 border-black max-w-[825.35px]"></div>
        <div className="flex gap-5 flex-wrap justify-center">
          <p className="font-poppins text-base font-semibold">Terms</p>
          <p className="font-poppins text-base font-semibold">Privacy</p>
          <p className="font-poppins text-base font-semibold">Cookies</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
