const HeaderTextOverlay = () => {
  return (
    <section className='max-w-[1220px] mx-auto h-[621.19px] mr-16 mt-52 border-sky-100 border-2'>
      <div className='flex flex-col items-start justify-start relative h-full'>
        <div className='absolute left-0 -top-40 flex flex-col items-center gap-12 md:-top-16 md:-left-10 md:gap-12'>
          <div className='border-l border-black h-[1.3cm] sm:h-[1cm] md:h-[0.8cm] lg:h-[1.3cm]'></div>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] sm:text-xs md:text-[10px] lg:text-sm'>
            2024
          </p>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] mt-2 sm:mt-1 md:mt-0.5 lg:mt-2'>
            EDITION
          </p>
        </div>
        <div className='relative'>
          <p className='rotate-90 text-white text-[30px] md:text-[55px] font-mochiy absolute left-60 md:top-0 md:left-[800px]'>
            2024
          </p>
          <p className='absolute font-mochiy text-[#FFC39A] z-30 left-0 top-[300px] text-[80px] md:text-[192.13px] md:left-12 md:-top-28'>
            New
          </p>
          <div className='flex gap-2 absolute top-[250px] left-[120px] md:top-52 md:left-[254px]'>
            <div className='border-l-4 border-[#313333] h-10 sm:h-8 md:h-6 lg:h-10'></div>
            <div>
              <p className='font-mochiy text-sm text-[#313333] sm:text-xs md:text-[10px] lg:text-sm'>
                TimberTrove
              </p>
              <p className='font-mochiy text-sm text-[#313333] sm:text-xs md:text-[10px] lg:text-sm'>
                Furniture
              </p>
            </div>
          </div>
          <p className='text-[#FF6F00] text-[60px] font-mochiy -z-10 absolute left-[50px] top-[440px] md:top-36 md:text-[131.59px] md:left-[480px]'>
            arrivals
          </p>
        </div>
        {/* Border and Text Container for Right Bottom */}
        <div className='absolute -right-20 md:right-0 bottom-20 md:bottom-32 flex flex-col items-center gap-10 md:gap-10'>
          <div className='border-l border-black h-[1.3cm] sm:h-[1cm] md:h-[0.8cm] lg:h-[1.3cm]'></div>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] sm:text-xs md:text-[10px] lg:text-sm'>
            2024
          </p>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] mt-2 sm:mt-1 md:mt-0.5 lg:mt-2'>
            EDITION
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderTextOverlay;
