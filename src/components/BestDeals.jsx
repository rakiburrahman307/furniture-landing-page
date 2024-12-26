import bestDeal1 from "../assets/images/bestDeal/bestDeal1.png";
import bestDeal2 from "../assets/images/bestDeal/bestDeal2.png";

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
    <section className='max-w-[1499px] mx-auto relative'>
      {/* Main Banner */}
      <div className='h-[671px] bg-[#647485] flex items-center pl-28 gap-12'>
        {/* Text Content */}
        <div className='flex flex-col space-y-16'>
          <div className='flex flex-col justify-start items-start'>
            <p className='font-mochiy text-[30px] text-white'>Best Deals</p>
            <p className='font-mochiy text-xl text-white'>$77.00</p>
          </div>
          <div className='flex flex-col justify-start items-start gap-6'>
            <p className='font-mochiy text-xl text-white'>
              Grab your best <br /> offers!!
            </p>
            <button className='p-[10px] w-[147px] h-[49px] rounded-lg bg-[#FFFFFF] font-mochiy text-base text-black'>
              Shop now
            </button>
          </div>
        </div>
        {/* Countdown Timer */}
        <div className='flex gap-8 text-center'>
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
      <div className='h-[111px] bg-[#CDC9C4]'>
        <img
          className='absolute right-1 -bottom-9 w-[481px] h-[543px]'
          src={bestDeal1}
          alt='Best deal item 1'
        />
        <img
          className='absolute right-[400px] -bottom-12 w-[466px] h-[626px]'
          src={bestDeal2}
          alt='Best deal item 2'
        />
      </div>
    </section>
  );
};

export default BestDeals;
