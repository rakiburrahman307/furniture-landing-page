import topBrand1 from "../assets/images/topBrand/topBrand1.png";
import topBrand2 from "../assets/images/topBrand/topBrand2.png";
import topBrand3 from "../assets/images/topBrand/topBrand3.png";
import topBrand4 from "../assets/images/topBrand/topBrand4.png";
import topBrand5 from "../assets/images/topBrand/topBrand5.png";
import Heading from "./Heading";
const TopBrand = () => {
  return (
    <section className='container mx-auto px-6 mt-24'>
      <div className=''>
        <Heading> top brand</Heading>

        <div className='flex justify-between items-center gap-3 pt-20'>
          <img src={topBrand1} alt='' className='block w-[104.26px] h-[92.79px]' />
          <img src={topBrand2} alt='' className='block w-[104.26px] h-[92.79px]' />
          <img src={topBrand3} alt='' className='block w-[104.26px] h-[92.79px]' />
          <img src={topBrand4} alt='' className='block w-[104.26px] h-[92.79px]' />
          <img src={topBrand5} alt='' className='block w-[104.26px] h-[92.79px]' />
        </div>
      </div>
    </section>
  );
};

export default TopBrand;
