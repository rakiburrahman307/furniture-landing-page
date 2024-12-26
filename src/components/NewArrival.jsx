import { FaStar } from "react-icons/fa6";
import Heading from "./Heading";
import newArrival1 from "../assets/images/newArrival/newArrival1.jpeg";
import newArrival2 from "../assets/images/newArrival/newArrival2.jpeg";
import newArrival3 from "../assets/images/newArrival/newArrival3.jpeg";
import newArrival4 from "../assets/images/newArrival/newArrival4.jpeg";
import newArrival5 from "../assets/images/newArrival/newArrival5.jpeg";
import newArrival6 from "../assets/images/newArrival/newArrival6.jpeg";
import newArrival7 from "../assets/images/newArrival/newArrival7.jpeg";
import newArrival8 from "../assets/images/newArrival/newArrival8.jpeg";

const products = [
  {
    image: newArrival1,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: false,
  },
  {
    image: newArrival2,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: false,
  },
  {
    image: newArrival3,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: false,
  },
  {
    image: newArrival4,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: true,
  },
  {
    image: newArrival5,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: false,
  },
  {
    image: newArrival6,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: true,
  },
  {
    image: newArrival7,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: false,
  },
  {
    image: newArrival8,
    title: "L-SHAPE SOFA-PARIS",
    price: "$39.99",
    rating: "5.0",
    hot: true,
    discount: true,
  },
];

const NewArrival = () => {
  return (
    <section className='container mx-auto px-6 my-24'>
      <Heading>new arrival</Heading>
      <div className='mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20'>
        {products?.map((product, index) => (
          <div key={index}>
            <div className='relative'>
              <img
                src={product?.image}
                alt={product?.title}
                className='block w-full h-[334px]'
              />
              {product?.hot && (
                <p className='text-[10px] leading-[15px] text-white capitalize absolute top-4 left-4 bg-[#F56E07] rounded-lg py-1 px-3'>
                  hot
                </p>
              )}
              {product?.discount && (
                <p className='text-[10px] leading-[15px] text-white capitalize absolute top-4 right-4 bg-[#FF3939] rounded-lg py-1 px-3'>
                  -10%
                </p>
              )}
            </div>
            <div className='text-[#373737]'>
              <h3 className='uppercase text-[#373737] pb-1 pt-8 font-poppins font-semibold'>
                {product?.title}
              </h3>
              <ul className='flex items-center gap-5 text-[#454545]'>
                <li className='font-poppins font-medium'>{product?.price}</li>
                <li>|</li>
                <li className='flex items-center justify-center font-poppins font-medium gap-1'>
                  {product?.rating}
                  <FaStar className='ms-2 text-[#F5D426] font-lg' />
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrival;
