import { PiBagLight } from "react-icons/pi";
import MobileSidebar from "./MobileSlider";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='flex flex-wrap justify-between items-center max-w-[1340px] mx-auto px-4 py-4 h-[50.53px] pt-[60px]'>
      <div className='text-[30px] md:text-[40px] font-bebas'>Timber Trove</div>

      <div className='hidden md:block'>
        <ul className='font-mochiy text-lg md:text-xl flex gap-12'>
          <li className='hover:text-green-500 cursor-pointer'>HOME</li>
          <li className='hover:text-green-500 cursor-pointer'>SHOP</li>
          <li className='hover:text-green-500 cursor-pointer'>Features</li>
          <li className='hover:text-green-500 cursor-pointer'>Contact</li>
        </ul>
      </div>
      <div className='flex justify-center items-center gap-5 md:gap-10'>
        <div className='relative'>
          <PiBagLight size={30} className='md:size-35' />
          <div className='w-3 h-3 md:w-2.5 md:h-2.5 absolute top-5 left-5 md:top-5 md:left-5 bg-green-500 rounded-full'></div>
        </div>
        <button className='hidden md:block font-mochiy rounded-md px-4 py-2 text-[16px] md:text-[19.43px] border-2 border-black hover:bg-black hover:text-white transition'>
          Login
        </button>
        <div className='relative flex items-center justify-center gap-5 md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='w-5 h-6 flex items-center'
            aria-label='Toggle Mobile Menu'
          >
            <FaBarsStaggered size={30} className='md:size-35' />
          </button>
        </div>
        <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </nav>
  );
};

export default Nav;
