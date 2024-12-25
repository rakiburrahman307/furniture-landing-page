const HeaderTextOverlay = () => {
  return (
    <section className='max-w-[1220px] mx-auto h-[621.19px] border-sky-100 border-2'>
      <div className='flex flex-col items-start justify-start relative h-full'>
        <div className='absolute left-0 flex flex-col items-center gap-10 top-16'>
          <div className='border-l border-black h-[1cm]'></div>
          <p className='rotate-90 text-sm font-mochiy text-[#313333]'>2024</p>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] mt-2'>
            EDITION
          </p>
        </div>
        <div className='relative'>
          <p className='rotate-90 text-black text-[55px] font-mochiy absolute left-[850px] top-16'>
            2024
          </p>
          <p className='text-[192.13px] absolute font-mochiy text-[#FFC39A] z-30 left-14 top-0'>
            New
          </p>
          <div className='flex gap-2 absolute top-72 left-64'>
            <div className='border-l-4 border-[#313333] h-10'></div>
            <div>
              <p className='font-mochiy text-sm text-[#313333]'>TimberTrove</p>
              <p className='font-mochiy text-sm text-[#313333]'>Furniture</p>
            </div>
          </div>
          <p className='text-[#FF6F00] text-[131.59px] font-mochiy -z-10 absolute top-48 left-[520px]'>
            arrivals
          </p>
        </div>
        {/* Border and Text Container for Right Bottom */}
        <div className='absolute right-0 bottom-32 flex flex-col items-center gap-10'>
          <div className='border-l border-black h-[1cm]'></div>
          <p className='rotate-90 text-sm font-mochiy text-[#313333]'>2024</p>
          <p className='rotate-90 text-sm font-mochiy text-[#313333] mt-2'>
            EDITION
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderTextOverlay;
