import char from "../assets/images/char.png";
import wood from "../assets/images/wood.png";
import HeaderTextOverlay from "./HeaderTextOverlay";
import Nav from "./nav";

const Header = () => {
  return (
    <header className='max-w-[1500px] h-[871px] mx-auto bg-[#E9F4EE] relative z-50 sm:h-[700px] md:h-[600px] lg:h-[871px]'>
      <Nav />
      <div className='flex relative'>
        <img
          src={wood}
          className='-rotate-[52.99deg] h-[339.92px] w-[767.89px] absolute top-[242px] -left-[40.56px] sm:h-[250px] sm:w-[600px] sm:top-[200px] sm:-left-[30px] md:h-[200px] md:w-[500px] md:top-[150px] md:-left-[20px] lg:h-[339.92px] lg:w-[767.89px] lg:top-[242px] lg:-left-[40.56px]'
          alt=''
        />
        <img
          src={char}
          className='absolute w-[496px] h-[465px] top-[90px] left-[531px] sm:w-[350px] sm:h-[300px] sm:top-[70px] sm:left-[400px] md:w-[300px] md:h-[250px] md:top-[50px] md:left-[300px] lg:w-[496px] lg:h-[465px] lg:top-[90px] lg:left-[531px]'
          alt=''
        />
      </div>
      <HeaderTextOverlay />
    </header>
  );
};

export default Header;
