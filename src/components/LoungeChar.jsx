import image1 from "../assets/images/image4.jpeg";
import image2 from "../assets/images/image5.jpeg";
import image3 from "../assets/images/image6.jpeg";
const LoungeChar = () => {
  return (
    <section className='flex gap-20 justify-center items-center mt-60'>
      <div className='w-[404px] h-[368px] rounded-lg relative'>
        <img className='w-[404px] h-[368px]' src={image3} alt='image' />
        <div className='flex flex-col justify-start items-start absolute bottom-5 left-4'>
          <p className='text-base font-robotoSerif font-medium'>Hot Product</p>
          <p className='text-[24px] font-mochiy'>Lounge Chair</p>
          <p className='text-base font-robotoSerif font-medium'>Shop now</p>
        </div>
      </div>
      <div className='w-[404px] h-[368px] rounded-lg'>
        <img src={image2} alt='image' />
      </div>
      <div className='w-[404px] h-[368px] rounded-lg relative'>
        <img className='w-[404px] h-[368px]' src={image1} alt='image' />
        <div className='flex flex-col justify-start items-start absolute bottom-5 left-4'>
          <p className='text-base font-robotoSerif font-medium'>Hot Product</p>
          <p className='text-[24px] font-mochiy'>Lounge Chair</p>
          <p className='text-base font-robotoSerif font-medium'>Shop now</p>
        </div>
      </div>
    </section>
  );
};

export default LoungeChar;
