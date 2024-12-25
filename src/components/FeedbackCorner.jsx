import Heading from "./Heading";

const FeedbackCorner = () => {
  return (
    <section className='container mx-auto px-6 mt-24'>
      <div>
        <Heading>feedback corner</Heading>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-20'>
        <div className='rounded-[3px] shadow-customShadow pt-2 px-5 pb-10 duration-300 hover:bg-[#E9F4EE]'>
          <p className='text-6xl'>&quot;</p>
          <h3 className='font-semibold text-xl capitalize pb-6 font-serif'>
            emily wilson
          </h3>
          <p className='font-medium text-base text-[#6F6F6F] duration-300 hover:text-black font-poppins'>
            The customer experience was exceptional from start to finish. The
            website is user-friendly, the checkout process was smooth, and the
            clothes I ordered fit perfectly. I&apos;m beyond satisfied!
          </p>
        </div>
        <div className='rounded-[3px] shadow-customShadow pt-2 px-5 pb-10 duration-300 hover:bg-[#E9F4EE]'>
          <p className='text-6xl'>&quot;</p>
          <h3 className='font-semibold text-xl capitalize pb-6 font-serif'>
            Sarah Thompson
          </h3>
          <p className='font-medium text-base text-[#6F6F6F] duration-300 hover:text-black font-poppins'>
            I absolutely love the quality and style of the clothing I purchased
            from this website. customer service was outstanding, and I received
            my order quickly. Highly recommended!
          </p>
        </div>
        <div className='rounded-[3px] shadow-customShadow pt-2 px-5 pb-10 duration-300 hover:bg-[#E9F4EE]'>
          <p className='text-6xl'>&quot;</p>
          <h3 className='font-semibold text-xl capitalize pb-6 font-serif'>
            Olivia Martinez
          </h3>
          <p className='font-medium text-base text-[#6F6F6F] duration-300 hover:text-black font-poppins'>
            I had a great experience shopping on this website. The clothes I
            bought are fashionable and comfortable. Highly satisfied!
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeedbackCorner;
