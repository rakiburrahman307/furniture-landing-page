import char from "../../assets/images/char.png";
import wood from "../../assets/images/wood.png";
import HeaderTextOverlay from "./HeaderTextOverlay";
import Nav from "./nav";

const Header = () => {
  return (
    <header className='bg-[#E9F4EE] md:max-w-[1920px] mx-auto'>
      <div className='w-full md:max-w-[1500px] h-[871px] mx-auto relative z-50 sm:h-[700px] md:h-[600px] lg:h-[871px]'>
        {/* Navigation */}
        <Nav /> 
        {/* Decorative Images */}
        <div className='flex justify-center items-center md:relative w-f'>
          <img
            src={wood}
            className='hidden md:flex absolute -rotate-[53deg] top-[242px] -left-10 h-[340px] w-[768px] sm:h-[250px] sm:w-[600px] sm:top-[200px] sm:-left-[30px] md:h-[200px] md:w-[500px] md:top-[150px] md:-left-[20px] lg:h-[340px] lg:w-[768px] lg:top-[242px] lg:-left-10'
            alt='Decorative wood background'
          />
          <img
            src={char}
            className='absolute top-1/2 left-1/2 transform md:transform-none md:-translate-x-0 -translate-x-1/2 -translate-y-1/2 md:-translate-y-0 md:w-[496px] md:h-[465px] md:top-[90px] md:left-[531px]'
            alt='Decorative character'
          />
        </div>

        {/* Header Content */}
        <HeaderTextOverlay />
      </div>
    </header>
  );
};

export default Header;
