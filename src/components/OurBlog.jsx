import ourBlog1 from "../assets/images/ourBlog/ourBlog1.jpeg";
import ourBlog2 from "../assets/images/ourBlog/ourBlog2.jpeg";
import ourBlog3 from "../assets/images/ourBlog/ourBlog3.jpeg";

const OurBlog = () => {
  return (
    <section className='container mx-auto px-6 mt-24'>
      <div>
        <h2 className='capitalize text-3xl text-black text-center relative before:absolute before:bottom-0 before:w-[61px] before:h-[3px] before:bg-[#F56E07] before:rounded-e-full before:translate-x-[-50%] before:translate-y-[15px] before:left-[50%]'>
          our blog
        </h2>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 pt-20'>
        {/* First Card */}
        <div className=''>
          <div className='relative'>
            <img
              src={ourBlog1}
              alt='image'
              className='block w-full h-[267.03px] object-cover'
            />
            <div className='absolute top-4 left-4 bg-white rounded-lg py-2 px-[18px] text-center'>
              <p>5</p>
              <p className='capitalize'>june</p>
            </div>
          </div>
          <div className='py-5'>
            <h4 className='text-[#FF6F00] font-medium font-serif capitalize'>
              Dining Chair
            </h4>
            <h3 className='uppercase text-xl py-2 font-mochiy'>
              DOUBLE SOFA- ATHENS
            </h3>
            <p className='text-[#979797] pb-5 font-serif'>
              &quot;Elegant, ergonomic dining chair with premium materials and
              modern design.&quot;
            </p>
            <a
              href='#'
              className='capitalize text-[11px] font-mochiy pb-1 border-b-[1px] border-b-black duration-300 hover:text-[#FF6F00] hover:border-b-[#FF6F00]'
            >
              read more
            </a>
          </div>
        </div>

        {/* Second Card */}
        <div className=''>
          <div className='relative'>
            <img
              src={ourBlog2}
              alt='image'
              className='block w-full h-[267.03px] object-cover'
            />
            <div className='absolute top-4 left-4 bg-white rounded-lg py-2 px-[18px] text-center'>
              <p>5</p>
              <p className='capitalize'>june</p>
            </div>
          </div>
          <div className='py-5'>
            <h4 className='text-[#FF6F00] font-medium capitalize font-serif'>
              Sofa
            </h4>
            <h3 className='uppercase text-xl py-2 font-mochiy'>
              DOUBLE SOFA- ATHENS
            </h3>
            <p className='text-[#979797] pb-5 font-serif'>
              &quot;Elegant, ergonomic dining chair with premium materials and
              modern design.&quot;
            </p>
            <a
              href='#'
              className='capitalize text-[11px] font-mochiy pb-1 border-b-[1px] border-b-black duration-300 hover:text-[#FF6F00] hover:border-b-[#FF6F00]'
            >
              read more
            </a>
          </div>
        </div>

        {/* Third Card */}
        <div className=''>
          <div className='relative'>
            <img
              src={ourBlog3}
              alt='image'
              className='block w-full h-[267.03px] object-cover'
            />
            <div className='absolute top-4 left-4 bg-white rounded-lg py-2 px-[18px] text-center'>
              <p>5</p>
              <p className='capitalize'>june</p>
            </div>
          </div>
          <div className='py-5'>
            <h4 className='text-[#FF6F00] font-medium capitalize font-serif'>
              Sofa
            </h4>
            <h3 className='uppercase text-xl py-2 font-mochiy'>
              DOUBLE SOFA- ATHENS
            </h3>
            <p className='text-[#979797] pb-5 font-serif'>
              &quot;Elegant, ergonomic dining chair with premium materials and
              modern design.&quot;
            </p>
            <a
              href='#'
              className='capitalize text-[11px] font-mochiy pb-1 border-b-[1px] border-b-black duration-300 hover:text-[#FF6F00] hover:border-b-[#FF6F00]'
            >
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;
