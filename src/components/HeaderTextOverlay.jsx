const HeaderTextOverlay = () => {
  return (
    <section className="max-w-[1220px] mx-auto h-[621.19px] mr-16 mt-52 border-sky-100 border-2">
      <div className="flex flex-col items-start justify-start relative h-full">
        <div className="absolute -left-10 flex flex-col items-center gap-12 -top-16 sm:-left-8 sm:gap-10 md:-left-6 md:gap-8 lg:-left-10 lg:gap-12">
          <div className="border-l border-black h-[1.3cm] sm:h-[1cm] md:h-[0.8cm] lg:h-[1.3cm]"></div>
          <p className="rotate-90 text-sm font-mochiy text-[#313333] sm:text-xs md:text-[10px] lg:text-sm">
            2024
          </p>
          <p className="rotate-90 text-sm font-mochiy text-[#313333] mt-2 sm:mt-1 md:mt-0.5 lg:mt-2">
            EDITION
          </p>
        </div>
        <div className="relative">
          <p className="rotate-90 text-white text-[55px] font-mochiy absolute left-[800px] top-0 sm:left-[600px] md:left-[400px] lg:left-[800px]">
            2024
          </p>
          <p className="text-[192.13px] absolute font-mochiy text-[#FFC39A] z-30 left-12 -top-28 sm:text-[150px] sm:left-10 sm:-top-20 md:text-[120px] md:left-8 md:-top-16 lg:text-[192.13px] lg:left-12 lg:-top-28">
            New
          </p>
          <div className="flex gap-2 absolute top-52 left-[254px] sm:left-[200px] md:left-[150px] lg:left-[254px]">
            <div className="border-l-4 border-[#313333] h-10 sm:h-8 md:h-6 lg:h-10"></div>
            <div>
              <p className="font-mochiy text-sm text-[#313333] sm:text-xs md:text-[10px] lg:text-sm">
                TimberTrove
              </p>
              <p className="font-mochiy text-sm text-[#313333] sm:text-xs md:text-[10px] lg:text-sm">
                Furniture
              </p>
            </div>
          </div>
          <p className="text-[#FF6F00] text-[131.59px] font-mochiy -z-10 absolute top-36 left-[480px] sm:text-[100px] sm:left-[350px] md:text-[80px] md:left-[250px] lg:text-[131.59px] lg:left-[480px]">
            arrivals
          </p>
        </div>
        {/* Border and Text Container for Right Bottom */}
        <div className="absolute right-0 bottom-32 flex flex-col items-center gap-10 sm:gap-8 md:gap-6 lg:gap-10">
          <div className="border-l border-black h-[1.3cm] sm:h-[1cm] md:h-[0.8cm] lg:h-[1.3cm]"></div>
          <p className="rotate-90 text-sm font-mochiy text-[#313333] sm:text-xs md:text-[10px] lg:text-sm">
            2024
          </p>
          <p className="rotate-90 text-sm font-mochiy text-[#313333] mt-2 sm:mt-1 md:mt-0.5 lg:mt-2">
            EDITION
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeaderTextOverlay;
