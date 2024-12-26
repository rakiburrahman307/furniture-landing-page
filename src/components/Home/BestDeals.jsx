import bestDeal1 from "../../assets/images/bestDeal/bestDeal1.png";
import bestDeal2 from "../../assets/images/bestDeal/bestDeal2.png";

const BestDeals = () => {
  const timeObj = [
    {
      label: "DAYS",
      time: 10,
    },
    {
      label: "HOURS",
      time: 11,
    },
    {
      label: "MINS",
      time: 13,
    },
    {
      label: "SECS",
      time: 20,
    },
  ];
  return (
    <section className='max-w-full mx-auto relative'>
      {/* Main Banner */}
      <div className='bg-[#647485] py-20 md:py-0'>
        <div className='w-full md:max-w-[1425px] mx-auto md:h-[671px] flex flex-col md:flex-row items-center gap-12'>
          {/* Text Content */}
          <div className='flex flex-col space-y-8 sm:space-y-16 text-center sm:text-left'>
            <div className='flex flex-col justify-start items-center md:items-start'>
              <p className='font-mochiy text-[30px] text-white'>Best Deals</p>
              <p className='font-mochiy text-xl text-white'>$77.00</p>
            </div>
            <div className='flex flex-col justify-start md:items-start items-center gap-6'>
              <p className='font-mochiy text-xl text-white'>
                Grab your best <br /> offers!!
              </p>
              <button className='p-[10px] w-[147px] h-[49px] rounded-lg bg-[#FFFFFF] font-mochiy text-base text-black'>
                Shop now
              </button>
            </div>
          </div>
          {/* Countdown Timer */}
          <div className='flex gap-4 md:gap-8 text-center'>
            {timeObj?.map((element, index) => (
              <div key={index}>
                <div className='bg-[#FF6F00] p-6 rounded-lg w-[67px] h-[64px] flex flex-col justify-center items-center'>
                  <h1 className='text-4xl font-semibold text-white'>
                    {element?.time}
                  </h1>
                </div>
                <p className='text-base font-mochiy text-[#F5F6F7] mt-2'>
                  {element?.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='h-[111px] bg-[#CDC9C4]'>
        <img
          className='absolute right-0 -bottom-5 md:right-1 md:-bottom-9 w-52 h-52 md:w-[481px] md:h-[543px]'
          src={bestDeal1}
          alt='Best deal item 1'
        />
        <img
          className='absolute right-48../ -bottom-5 w-52 h-52 md:right-[400px] md:-bottom-12 md:w-[466px] md:h-[626px]'
          src={bestDeal2}
          alt='Best deal item 2'
        />
      </div>
    </section>
  );
};

export default BestDeals;
