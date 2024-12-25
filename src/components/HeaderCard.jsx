import char1 from "../assets/images/char1.png";
import char2 from "../assets/images/char2.png";
import char3 from "../assets/images/char3.png";

const HeaderCard = () => {
  return (
    <section className='flex max-w-[1173px] mx-auto gap-5 -mt-[130px] flex-wrap sm:flex-col md:flex-row lg:flex-row'>
      {/* First Card */}
      <div className='flex relative flex-col justify-center items-center w-[372px] h-[260px] bg-white shadow-xl sm:w-[320px] sm:h-[250px] md:w-[350px] lg:w-[372px]'>
        <img
          className='w-[198px] absolute -top-20 h-[198px] sm:w-[170px] sm:h-[170px] md:w-[180px] md:h-[180px]'
          src={char1}
          alt='Comfy Chair'
        />
        <div className='mt-20 flex flex-col justify-center items-center gap-5'>
          <h4 className='text-xl font-mochiy sm:text-lg md:text-xl'>
            Comfy Chair
          </h4>
          <p className='text-[#FE9341] sm:text-sm md:text-lg'>$30.50</p>
        </div>
      </div>

      {/* Second Card */}
      <div className='flex relative flex-col justify-center items-center w-[372px] h-[260px] bg-white shadow-xl sm:w-[320px] sm:h-[250px] md:w-[350px] lg:w-[372px]'>
        <img
          className='w-[208px] absolute -top-20 h-[208px] sm:w-[180px] sm:h-[180px] md:w-[190px] md:h-[190px]'
          src={char2}
          alt='Comfy Chair'
        />
        <div className='mt-20 flex flex-col justify-center items-center gap-5'>
          <h4 className='text-xl font-mochiy sm:text-lg md:text-xl'>
            Comfy Chair
          </h4>
          <div className='flex gap-2 justify-center items-center'>
            <del className='text-[#BFBFBF] sm:text-sm md:text-md'>$17.50</del>
            <p className='text-[#FE9341] sm:text-sm md:text-lg'>$30.50</p>
          </div>
        </div>
      </div>

      {/* Third Card */}
      <div className='flex relative flex-col justify-center items-center w-[372px] h-[260px] bg-white shadow-xl sm:w-[320px] sm:h-[250px] md:w-[350px] lg:w-[372px]'>
        <img
          className='w-[209px] absolute -top-32 h-[289px] sm:w-[180px] sm:h-[250px] md:w-[190px] md:h-[270px]'
          src={char3}
          alt='VibeLiving Chair'
        />
        <div className='mt-20 flex flex-col justify-center items-center gap-5'>
          <h4 className='text-xl font-mochiy sm:text-lg md:text-xl'>
            VibeLiving Chair
          </h4>
          <div className='flex gap-2 justify-center items-center'>
            <del className='text-[#BFBFBF] sm:text-sm md:text-md'>$17.50</del>
            <p className='text-[#FE9341] sm:text-sm md:text-lg'>$30.50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderCard;
